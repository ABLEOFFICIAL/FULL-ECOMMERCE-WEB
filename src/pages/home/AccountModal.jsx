import React, { useEffect, useRef } from "react";
import { LuUser } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { logout } from "../../store/AuthSlice";
import { showProfile } from "../../store/contextSlice";

export const UserIcon = ({ onClick, className }) => {
  return (
    <LuUser
      onClick={onClick}
      size={25}
      className={`cursor-pointer ${className} `}
    />
  );
};

export default function AccountModal() {
  const toggle = useSelector((state) => state.context.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const modalRef = useRef(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        dispatch(showProfile(false)); // Close modal
      }
    };

    const handleTouchStart = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        dispatch(showProfile(false)); // Close modal
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [dispatch]);

  useEffect(() => {
    if (toggle) {
      dispatch(showProfile(false)); // close on route change
    }
  }, [location.pathname, dispatch]);

  if (!toggle) return null;

  return (
    <div
      ref={modalRef}
      className="absolute right-0 top-20 w-[224px] h-[208px] flex justify-center items-center p-4 rounded-lg shadow-lg bg-black/30 backdrop-blur-md text-white space-y-4 z-50"
    >
      <div className="w-[192px] h-[180px] flex flex-col justify-between">
        <Link to={"/profile"}>
          <div className="flex items-center space-x-2">
            <UserIcon />
            <p className="smallp">Manage My Account</p>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="flex items-center space-x-2">
            <FiShoppingBag size={25} />
            <p className="smallp">My Order</p>
          </div>
        </Link>
        <Link to={"/cancellations"}>
          <div className="flex items-center space-x-2">
            <MdOutlineCancel size={25} />
            <p className="smallp">My Cancellations</p>
          </div>
        </Link>
        <Link to={"/reviews"}>
          <div className="flex items-center space-x-2">
            <CiStar size={25} className="stroke-1" />
            <p className="smallp">My Reviews</p>
          </div>
        </Link>
        <button onClick={handleLogout}>
          <div className="flex items-center space-x-2">
            <TbLogout2 size={25} />
            <p className="smallp">Logout</p>
          </div>
        </button>
      </div>
    </div>
  );
}
