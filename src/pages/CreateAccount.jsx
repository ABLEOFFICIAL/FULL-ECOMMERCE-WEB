import React, { useState, useEffect, useContext } from "react";
import sideimg from "../assets/Side Image.png";
import google from "../assets/Icon-Google.png";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../store/AuthSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { SignUpSchema } from "../utils/ValidationSchema";
import { setUserData } from "../store/AuthSlice";
import { Context } from "../context/Context";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { setGoogleModal } = useContext(Context);
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const userData = useSelector((state) => state.auth.userData);
  console.log("Current Redux state:", user);

  // google sign in
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
      setGoogleModal(true);
    } catch (error) {
      console.error("Error signing in with Google", error);
      if (error.code === "auth/popup-blocked") {
        alert(
          "Popup was blocked by your browser. Please allow popups for this site and try again."
        );
      } else {
        alert("An error occurred during Google sign-in. Please try again.");
      }
    }
  };

  // Sync Firebase auth state without navigation
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Firebase auth state changed:", firebaseUser);
      if (firebaseUser) {
        if (firebaseUser.isAnonymous) {
          console.log("Anonymous user detected, signing out...");
          signOut(auth).catch((error) =>
            console.error("Sign out error:", error)
          );
        } else {
          dispatch(
            setUser({ email: firebaseUser.email, uid: firebaseUser.uid })
          );
        }
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleSubmit = async (values, { setFieldError }) => {
    console.log("handleSubmit called with values:", values);
    setIsLoading(true);
    setIsSigningUp(true);
    try {
      if (auth.currentUser?.isAnonymous) {
        console.log("Signing out anonymous user before signup...");
        await signOut(auth);
      }

      console.log("Attempting Firebase signup...");
      if (!auth) {
        throw new Error("Firebase auth object is undefined");
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const updatedData = { ...userData, ...values };
      dispatch(setUserData(updatedData));
      localStorage.setItem("userData", JSON.stringify(updatedData)); // Save as object
      console.log(updatedData);

      const newUser = userCredential.user;
      console.log("Firebase user created:", newUser);

      dispatch(
        setUser({ name: values.name, email: values.email, uid: newUser.uid })
      );
      console.log("User stored in Redux:", {
        name: values.name,
        email: values.email,
        uid: newUser.uid,
      });

      console.log("Navigating to /login...");
      navigate("/login", { replace: true, state: { from: "signup" } });
    } catch (error) {
      console.error("Signup error:", error.code, error.message, error);
      if (error.code === "auth/email-already-in-use") {
        setFieldError("email", "This email is already in use.");
      } else if (error.code === "auth/admin-restricted-operation") {
        setFieldError(
          "email",
          "Operation not allowed. Please try again or disable anonymous authentication."
        );
      } else {
        setFieldError("email", `Signup failed: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
      setIsSigningUp(false);
      console.log("Submission complete, isLoading reset to false");
    }
  };

  return (
    <main className="md:h-[781px] h-auto md:w-[1405px] w-screen mt-14 mb-20 flex">
      <div className="w-[805px] h-full hidden md:block">
        <img src={sideimg} className="w-full h-full" alt="Side visual" />
      </div>
      <div className="md:ml-auto ml-0 flex items-center">
        <div className="md:w-[371px] w-screen h-auto md:h-[530px] flex flex-col justify-between">
          <span className="flex flex-col h-[78px] justify-between text-center">
            <h1 className="create">Create an account</h1>
            <p className="mediump">Enter your details below</p>
          </span>

          <Formik
            initialValues={{
              name: user?.name || "",
              email: user?.email || "",
              password: "",
            }}
            validationSchema={SignUpSchema}
            context={{ $isSignup: true }}
            onSubmit={handleSubmit}
            enableReinitialize
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ isSubmitting, values, isValid, errors, touched }) => (
              <Form className="md:h-[404px] h-auto md:w-full w-[90%] mx-auto flex flex-col gap-5 md:gap-0 justify-between">
                {/* {console.log(
                  "Current form values:",
                  values,
                  "Errors:",
                  errors,
                  "IsValid:",
                  isValid,
                  "Touched:",
                  touched
                )} */}
                <div className="mb-4">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="py-2 w-full focus:outline-none border-b-[1px] border-neutral-700/50"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-400 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="py-2 w-full focus:outline-none border-b-[1px] border-neutral-700/50"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-400 text-sm"
                  />
                </div>

                <div className="relative mb-4">
                  <Field name="password">
                    {({ field, meta }) => (
                      <div className="relative">
                        <input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="py-2 w-full focus:outline-none border-b-[1px] border-neutral-700/50"
                        />
                        {meta.touched && meta.error && (
                          <div className="text-red-500 text-sm">
                            {meta.error}
                          </div>
                        )}
                        <div className="absolute top-0 right-0 h-full w-14 flex justify-center items-center">
                          {showPassword ? (
                            <FaRegEye
                              onClick={() => setShowPassword(false)}
                              className="size-5 text-neutral-600 cursor-pointer"
                            />
                          ) : (
                            <FaRegEyeSlash
                              onClick={() => setShowPassword(true)}
                              className="size-5 text-neutral-600 cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || isSubmitting || !isValid}
                  className="errorbtn w-full transition-colors disabled:opacity-70"
                  onClick={() => console.log("Submit button clicked")}
                >
                  {isLoading ? (
                    <div className="w-full h-full flex justify-center items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
                <button
                  onClick={signInWithGoogle}
                  type="button"
                  className="flex justify-center items-center gap-3 border-[1px] border-neutral-700/50 bg-white text-black rounded-sm py-4 px-12 h-[56px] w-full transition-colors disabled:opacity-70"
                >
                  <img src={google} alt="Google icon" />
                  <p className="mediump">Sign up with Google</p>
                </button>
                <div className="flex items-center justify-center gap-3">
                  <p className="mediump">Already have an account?</p>
                  <NavLink to="/login" className="text-black">
                    <p className="font-medium border-b-[1px] inline py-1">
                      Login
                    </p>
                  </NavLink>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
