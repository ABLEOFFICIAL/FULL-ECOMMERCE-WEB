import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null }, // Unified state with user object or null
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Store user data (e.g., { email, name } or Firebase user)
    },
    clearUser: (state) => {
      state.user = null; // Reset user on logout
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
