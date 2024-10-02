import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});