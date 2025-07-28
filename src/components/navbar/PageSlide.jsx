import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  showLogoutModal,
  hideLogoutModal,
  logout,
} from "../../store/AuthSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const LogoutMD = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutModal = useSelector((state) => state.auth.logoutModal);
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase logout
      dispatch(logout()); // Redux logout (clears local state & storage)
      navigate("/login"); // Optional: redirect to login
      dispatch(hideLogoutModal());
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  return (
    logoutModal && (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-6 text-center">
          <h3 className="text-lg font-semibold mb-4 text-green-600">
            Are you sure?
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            By logging out, you agree your account will be reserved to sign in
            again
          </p>
          <button
            onClick={handleLogout}
            className="bg-[var(--red)] text-white px-5 py-2 rounded-md transition"
          >
            Ok
          </button>
        </div>
      </div>
    )
  );
};

export default function PageSlide() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(location.pathname);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  console.log(location.pathname);
  const logoutModal = useSelector((state) => state.auth.logoutModal);
  return (
    <div className=" justify-between items-center w-[367px] hidden lg:flex">
      <Link to={"/"} className={`mediump ${active === "/" ? "border-b" : ""} `}>
        <p>Home</p>
      </Link>
      <Link
        to={"/contact-us"}
        className={`mediump ${active === "/contact-us" ? "border-b" : ""} `}
      >
        <p>Contact</p>
      </Link>
      <Link
        to={"/about-us"}
        className={`mediump ${active === "/about-us" ? "border-b" : ""} `}
      >
        <p>About</p>
      </Link>
      {user === null ? (
        <Link
          to={"/signup"}
          className={`mediump ${active === "/signup" ? "border-b" : ""} `}
        >
          <p>Sign Up</p>
        </Link>
      ) : (
        <button
          onClick={() => dispatch(showLogoutModal())}
          className={`mediump cursor-pointer `}
        >
          <p>Log Out</p>
        </button>
      )}
    </div>
  );
}
