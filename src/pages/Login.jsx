import React, { useState, useEffect } from "react";
import sideimg from "../assets/Side Image.png";
import google from "../assets/Icon-Google.png";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { LoginSchema } from "../utils/ValidationSchema";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../store/AuthSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.auth.user);
  console.log("Login: Current Redux state:", user);
  console.log("Login: Auth object:", auth);

  // Sync Firebase auth state
  useEffect(() => {
    console.log("Login: Setting up Firebase auth state listener...");
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Login: Firebase auth state changed:", firebaseUser);
      if (firebaseUser) {
        if (firebaseUser.isAnonymous) {
          console.log("Login: Anonymous user detected, signing out...");
          signOut(auth).catch((error) =>
            console.error("Login: Sign out error:", error)
          );
        } else {
          dispatch(
            setUser({ email: firebaseUser.email, uid: firebaseUser.uid })
          );
          // Only navigate if not initial load and not coming from signup
          if (!isInitialLoad && location.state?.from !== "signup") {
            console.log("Login: Navigating to /...");
            navigate("/", { replace: true });
          }
        }
      } else {
        dispatch(clearUser());
      }
      setIsInitialLoad(false);
    });
    return () => unsubscribe();
  }, [dispatch, navigate, isInitialLoad, location.state]);

  const handleSubmit = async (values, { setFieldError }) => {
    console.log("Login: handleSubmit called with values:", values);
    setIsLoading(true);
    try {
      if (auth.currentUser?.isAnonymous) {
        console.log("Login: Signing out anonymous user before login...");
        await signOut(auth);
      }

      console.log("Login: Attempting Firebase login...");
      if (!auth) {
        throw new Error("Firebase auth object is undefined");
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const loggedInUser = userCredential.user;
      console.log("Login: Firebase user logged in:", loggedInUser);

      dispatch(setUser({ email: values.email, uid: loggedInUser.uid }));
      console.log("Login: User stored in Redux:", {
        email: values.email,
        uid: loggedInUser.uid,
      });

      console.log("Login: Navigating to /...");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login: Login error:", error.code, error.message, error);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setFieldError("email", "Invalid email or password.");
      } else if (error.code === "auth/admin-restricted-operation") {
        setFieldError(
          "email",
          "Operation not allowed. Please try again or disable anonymous authentication."
        );
      } else {
        setFieldError("email", `Login failed: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
      console.log("Login: Submission complete, isLoading reset to false");
    }
  };

  return (
    <main className="md:h-[781px] h-auto md:w-[1405px] w-screen mt-14 mb-20 flex">
      <div className="w-[805px] h-full hidden md:block">
        <img src={sideimg} className="w-full h-full" alt="Side visual" />
      </div>
      <div className="md:ml-auto ml-0 flex items-center">
        <div className="w-[371px] h-[430px] md:h-[530px] flex flex-col justify-between">
          <span className="flex flex-col h-[78px] justify-between text-center">
            <h1 className="create">Log in to Exclusive</h1>
            <p className="mediump">Enter your details below</p>
          </span>

          <Formik
            initialValues={{
              email: user?.email || "",
              password: "",
            }}
            validationSchema={LoginSchema}
            context={{ $isSignup: false }}
            onSubmit={handleSubmit}
            enableReinitialize
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ isSubmitting, values, isValid, errors, touched }) => (
              <Form className="md:h-[404px] h-[300px] md:w-full w-[90%] mx-auto flex flex-col justify-between">
                {console.log(
                  "Login: Current form values:",
                  values,
                  "Errors:",
                  errors,
                  "IsValid:",
                  isValid,
                  "Touched:",
                  touched
                )}
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

                <div className="flex w-full justify-between items-center">
                  <button
                    type="submit"
                    disabled={isLoading || isSubmitting || !isValid}
                    className="errorbtn w-[143px] transition-colors disabled:opacity-70"
                    onClick={() => console.log("Login: Submit button clicked")}
                  >
                    {isLoading ? (
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>
                  <NavLink to="/forgot-password" className="text-black">
                    <p className="font-medium text-[#DB4444]">
                      Forgotten Password
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p className="mediump">Don't have an account?</p>
                  <NavLink to="/signup" className="text-black">
                    <p className="font-medium border-b-[1px] inline py-1">
                      Sign Up
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

export default Login;
