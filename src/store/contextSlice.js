import { createSlice } from "@reduxjs/toolkit";

const contextSlice = createSlice({
  name: "context",
  initialState: {
    toggle: false,
    shippingAddress: {
      firstName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      town: "",
      phoneNumber: "",
      emailAddress: "",
    },
    sideBar: false,
  },
  reducers: {
    showProfile: (state) => {
      state.toggle = !state.toggle;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = { ...state.shippingAddress, ...action.payload };
    },
    showSideBar: (state) => {
      state.sideBar = true;
    },
    hideSideBar: (state) => {
      state.sideBar = false;
    },
  },
});

export const { showProfile, setShippingAddress, showSideBar, hideSideBar } =
  contextSlice.actions;
export default contextSlice.reducer;
