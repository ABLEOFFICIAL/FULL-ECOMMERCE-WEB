import React from "react";

const Account = () => {
  return (
    <div className="container  my-10 flex justify-between">
      <div className="flex flex-col gap-10 w-[180px] ">
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
      <div className="w-[870px] h-[630px] rounded  -amber-800 shadow-md flex justify-center items-center ">
        <div className="w-[710px]  flex flex-col gap-7 ">
          <h6 className="text-[var(--red)] text-[20px] leading-7 font-poppins ">
            Edit Your Profile
          </h6>
          <div className="flex justify-between gap-[50px] items-center w-full  ">
            <label className="w-1/2 flex flex-col gap-2">
              <p className="mediump">First Name</p>
              <input
                type="text"
                name="firstName"
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded "
              />
            </label>
            <label className="w-1/2 flex flex-col gap-2">
              <p className="mediump">Last Name</p>
              <input
                type="text"
                name="lastName"
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded "
              />
            </label>
          </div>
          <div className="flex justify-between gap-[50px] items-center w-full  ">
            <label className="w-1/2 flex flex-col gap-2">
              <p className="mediump">Email</p>
              <input
                type="email"
                name="email"
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded "
              />
            </label>
            <label className="w-1/2 flex flex-col gap-2">
              <p className="mediump">Address</p>
              <input
                type="text"
                name="address"
                className="w-full bg-[#F5F5F5] text-black h-[50px] "
              />
            </label>
          </div>
          <div className="h-[214px] w-[710px] flex flex-col justify-between ">
            <label className="flex flex-col gap-2">
              <p className="mediump">Password Changes</p>
              <input
                type="password"
                name="currentPassword"
                className="w-full bg-[#F5F5F5] text-black h-[50px] rounded "
              />
            </label>
            <input
              type="password"
              name="newPassword"
              className="w-full bg-[#F5F5F5] text-black h-[50px] rounded "
            />
            <input
              type="password"
              name="confirmNew"
              className="w-full bg-[#F5F5F5] text-black h-[50px] rounded "
            />
          </div>
          <div className="flex items-center gap-3  justify-end">
            <button className="mediump">Cancel</button>
            <button className="w-[214px] h-[56px] rounded-sm bg-[var(--red)] text-white block ">
              Save CHanges
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
