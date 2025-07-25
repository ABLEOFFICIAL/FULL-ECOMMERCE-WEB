import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import contextReducer from "./contextSlice";
import productsReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Use unified authSlice
    context: contextReducer,
    productsAuth: productsReducer,
  },
});
