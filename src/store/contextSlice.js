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
  },
  reducers: {
    showProfile: (state) => {
      state.toggle = !state.toggle;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = { ...state.shippingAddress, ...action.payload };
    },
  },
});

export const { showProfile, setShippingAddress } = contextSlice.actions;
export default contextSlice.reducer;
