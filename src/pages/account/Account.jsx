import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/AuthSlice";

const Account = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [formData, setFormData] = useState(userData);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleSave = () => {
    dispatch(setUserData(formData));
    localStorage.setItem("userData", JSON.stringify(formData));
  };

  return (
    <div className="container  my-10 md:my-16 flex flex-col md:flex-row justify-between px-3 md:px-0 relative ">
      <div className="hidden md:flex flex-col gap-10 w-[180px] ">
        <div className="flex flex-col gap-4">
          <h4 className="boldp">Manage My Account</h4>
          <span className="w-max ml-auto h-[88px] flex flex-col justify-between ">
            <p className="mediump">My Profile</p>
            <p className="mediump">Address Book</p>
            <p className="mediump">My Payment Options</p>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="boldp">My Orders</h4>
          <span className="w-max ml-auto h-[56px] flex flex-col justify-between ">
            <p className="mediump">My Returns</p>
            <p className="mediump">My Cancellations</p>
          </span>
        </div>
        <div>
          <h4 className="boldp">My WishList</h4>
        </div>
      </div>
      <div className="w-full md:w-[870px] p-4 h-auto md:h-[630px] rounded  -amber-800 shadow-md flex justify-center items-center ">
        <div className="w-full md:w-[710px]  flex flex-col gap-7 ">
          <h6 className="text-[var(--red)] text-[20px] leading-7 font-poppins ">
            Edit Your Profile
          </h6>
          <div className="flex flex-col md:flex-row justify-between gap-[50px] items-start md:items-center w-full  ">
            <label className="w-full md:w-1/2 flex flex-col gap-2">
              <p className="mediump">First Name</p>
              <input
                type="text"
                name="firstName"
                value={formData.name}
                onChange={handleInput}
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4 "
              />
            </label>
            <label className="w-full md:w-1/2 flex flex-col gap-2">
              <p className="mediump">Last Name</p>
              <input
                type="text"
                name="lastName"
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4 "
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-[50px] items-start md:items-center w-full  ">
            <label className="w-full md:w-1/2 flex flex-col gap-2">
              <p className="mediump">Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4 "
              />
            </label>
            <label className="w-full md:w-1/2 flex flex-col gap-2">
              <p className="mediump">Address</p>
              <input
                type="text"
                name="address"
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4 "
              />
            </label>
          </div>
          <div className="h-[250px] md:h-[214px] w-[710px] flex flex-col justify-between ">
            <label className="flex flex-col gap-2">
              <p className="mediump">Password Changes</p>
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4 "
              />
            </label>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4 "
            />
            <input
              type="password"
              name="confirmNew"
              placeholder="Confirm new Password"
              className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4 "
            />
          </div>
          <div className="flex items-center gap-3  justify-end">
            <button className="mediump">Cancel</button>
            <button
              onClick={handleSave}
              className="w-[190px] md:w-[214px] h-[56px] rounded-sm bg-[var(--red)] text-white block "
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
