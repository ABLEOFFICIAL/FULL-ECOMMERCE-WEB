import React, { useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { hideSideBar, toggleShowDrop } from "../store/contextSlice";
import { RiArrowDropDownLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout } from "../store/AuthSlice";
import { Context } from "../context/Context";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.context.sideBar);
  const { accountCategory, setAccountCategory } = useContext(Context);
  const location = useLocation();
  // console.log(sideBar);

  const ShowDrop = useSelector((state) => state.context.showDrop);

  useEffect(() => {
    dispatch(hideSideBar());
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase logout
      dispatch(logout()); // Redux logout (clears local state & storage)
      navigate("/login"); // Optional: redirect to login
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    sideBar && (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="fixed min-h-screen w-[90vw] top-0 right-0 bottom-0 z-40 bg-white p-10 flex flex-col gap-10 ">
          <span className="flex justify-end">
            <FaTimes onClick={() => dispatch(hideSideBar())} size={30} />
          </span>
          <div className="text-sm font-normal flex flex-col gap-7">
            <Link to={"/"} className="">
              <p>Home</p>
            </Link>
            <Link to={"/contact-us"} className="">
              <p>Contact</p>
            </Link>
            <Link to={"/about-us"} className="">
              <p>About</p>
            </Link>
            <Link to={"/signup"} className="">
              <p>Sign Up</p>
            </Link>
            <div className="">
              <button
                onClick={() => dispatch(toggleShowDrop())}
                className=" flex items-center gap-4  "
              >
                <p>Account</p>
                <RiArrowDropDownLine
                  size={40}
                  className={ShowDrop ? "rotate-180 transform transition" : ""}
                />
              </button>
              {ShowDrop && (
                <div className="w-4/5 h-auto ml-5 py-4">
                  <div className="w-[192px] h-[180px] flex flex-col justify-between ">
                    <Link to={"/profile"}>
                      <div className="flex items-center space-x-2">
                        {/* <UserIcon /> */}
                        <p className="smallp">Manage My Account</p>
                      </div>
                    </Link>
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setAccountCategory("addressbook");
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        {/* <UserIcon /> */}
                        <p className="smallp">Address</p>
                      </div>
                    </button>
                    <Link to={"/orders"}>
                      <div className="flex items-center space-x-2">
                        {/* <FiShoppingBag size={25} /> */}
                        <p className="smallp">My Order</p>
                      </div>
                    </Link>
                    <Link to={"/cancellations"}>
                      <div className="flex items-center space-x-2">
                        {/* <MdOutlineCancel size={25} /> */}
                        <p className="smallp">My Cancellations</p>
                      </div>
                    </Link>
                    <Link to={"/reviews"}>
                      <div className="flex items-center space-x-2">
                        {/* <CiStar size={25} className="stroke-1" /> */}
                        <p className="smallp">My Reviews</p>
                      </div>
                    </Link>
                    <button onClick={handleLogout}>
                      <div className="flex items-center space-x-2">
                        {/* <TbLogout2 size={25} /> */}
                        <p className="smallp">Logout</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
