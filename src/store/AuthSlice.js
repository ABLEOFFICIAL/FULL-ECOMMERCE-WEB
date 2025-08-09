import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    userData: JSON.parse(localStorage.getItem("userData")) || {
      name: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
    },
    userAddress: JSON.parse(localStorage.getItem("userAddress")) || {
      country: "",
      streetName: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
    },
    logoutModal: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
      localStorage.setItem("userAddress", JSON.stringify(action.payload));
    },
    changePassword: (state, action) => {
      const { currentPassword, newPassword } = action.payload;
      if (state.userData.password === currentPassword) {
        state.userData.password = newPassword;
        localStorage.setItem("userData", JSON.stringify(state.userData));
      } else {
        throw new Error("Current password is incorrect");
      }
    },
    clearUser: (state) => {
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
      state.userData = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
      };
      localStorage.removeItem("userData");
    },
    showLogoutModal: (state) => {
      state.logoutModal = true;
    },
    hideLogoutModal: (state) => {
      state.logoutModal = false;
    },
  },
});

export const {
  setUser,
  clearUser,
  setUserData,
  setUserAddress,
  changePassword,
  logout,
  showLogoutModal,
  hideLogoutModal,
} = authSlice.actions;

export default authSlice.reducer;
