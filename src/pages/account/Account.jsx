import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, changePassword } from "../../store/AuthSlice";
import Address from "./Address";
import { Context } from "../../context/Context";

const Account = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [formData, setFormData] = useState(userData);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNew, setConfirmNew] = useState("");
  const { accountCategory, setAccountCategory } = useContext(Context);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // If user is changing password
    if (currentPassword || newPassword || confirmNew) {
      if (currentPassword !== userData.password) {
        alert("Current password is incorrect");
        return;
      }
      if (newPassword !== confirmNew) {
        alert("New passwords do not match");
        return;
      }
      if (!newPassword) {
        alert("New password cannot be empty");
        return;
      }
      // Update password in formData before saving
      formData.password = newPassword;
    }

    // Save updated profile
    dispatch(setUserData(formData));
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Profile updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNew("");
  };

  return (
    <div className="container my-10 lg:my-16 flex flex-col lg:flex-row justify-between px-3 lg:px-0 relative">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-10 w-[190px] p-3">
        <div className="flex flex-col gap-4">
          <h4 className="boldp">Manage My Account</h4>
          <span className="w-max ml-auto h-[88px] flex flex-col gap-2 justify-between">
            {["My Profile", "Address Book", "My Payment Options"].map(
              (cat, idx) => {
                console.log(cat.toLowerCase().replace(" ", ""));

                return (
                  <button
                    key={idx}
                    onClick={() =>
                      setAccountCategory(cat.toLowerCase().replace(" ", ""))
                    }
                    className={`mediump text-start cursor-pointer ${
                      accountCategory === cat.toLowerCase().replace(" ", "")
                        ? "bg-[var(--red)] text-white p-2 rounded-md"
                        : ""
                    }`}
                  >
                    {cat}
                  </button>
                );
              }
            )}
            {/* <button className="mediump text-start cursor-pointer"></button>
            <button className="mediump text-start cursor-pointer"></button>
            <button className="mediump text-start cursor-pointer"></button> */}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="boldp">My Orders</h4>
          <span className="w-max ml-auto h-[56px] flex flex-col justify-between">
            <button className="mediump text-start cursor-pointer">
              My Returns
            </button>
            <button className="mediump text-start cursor-pointer">
              My Cancellations
            </button>
          </span>
        </div>
      </div>
      {/* Profile Form */}
      {accountCategory === "myprofile" && (
        <div className="w-full lg:w-[870px] p-4 h-auto lg:h-[630px] rounded shadow-lg flex justify-center items-center">
          <div className="w-full lg:w-[710px] flex flex-col gap-7">
            <h6 className="text-[var(--red)] text-[20px] leading-7 font-poppins">
              Edit Your Profile
            </h6>

            {/* Name Fields */}
            <div className="flex flex-col lg:flex-row justify-between gap-[50px]">
              <label className="w-full lg:w-1/2 flex flex-col gap-2">
                <p className="mediump">First Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4"
                />
              </label>
              <label className="w-full lg:w-1/2 flex flex-col gap-2">
                <p className="mediump">Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInput}
                  className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4"
                />
              </label>
            </div>

            {/* Email & Address */}
            <div className="flex flex-col lg:flex-row justify-between gap-[50px]">
              <label className="w-full lg:w-1/2 flex flex-col gap-2">
                <p className="mediump">Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4"
                />
              </label>
              <label className="w-full lg:w-1/2 flex flex-col gap-2">
                <p className="mediump">Address</p>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInput}
                  className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4"
                />
              </label>
            </div>

            {/* Password Change */}
            <div className="h-[250px] lg:h-[214px] w-[710px] flex flex-col justify-between">
              <label className="flex flex-col gap-2">
                <p className="mediump">Password Changes</p>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4"
                />
              </label>
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4"
              />
              <input
                type="password"
                name="confirmNew"
                placeholder="Confirm New Password"
                value={confirmNew}
                onChange={(e) => setConfirmNew(e.target.value)}
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded px-4"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 justify-end">
              <button className="mediump">Cancel</button>
              <button
                onClick={handleSave}
                className="w-[190px] lg:w-[214px] h-[56px] rounded-sm bg-[var(--red)] text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      {accountCategory === "addressbook" && <Address />}
    </div>
  );
};

export default Account;
