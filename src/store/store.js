import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./Alert/alert.store";
import authReducer from "./Auth/auth.store";

export default configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
});
