import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/Auth";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
