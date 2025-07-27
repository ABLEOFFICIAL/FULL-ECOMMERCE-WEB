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
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Store user data (e.g., { email, name } or Firebase user)
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null; // Reset user on logout
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
  },
});

export const { setUser, clearUser, setUserData, logout } = authSlice.actions;
export default authSlice.reducer;
