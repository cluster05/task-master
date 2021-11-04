import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/auth.store";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
