import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../store/AuthSlice";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("ProtectedRoute: Setting up Firebase auth state listener...");
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      // console.log("ProtectedRoute: Firebase auth state:", firebaseUser);
      if (firebaseUser) {
        dispatch(setUser({ email: firebaseUser.email, uid: firebaseUser.uid }));
      } else {
        dispatch(clearUser());
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [dispatch]);

  console.log("ProtectedRoute: Current user:", user);

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    console.log("ProtectedRoute: No user, redirecting to /signup");
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
