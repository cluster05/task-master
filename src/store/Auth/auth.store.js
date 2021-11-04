import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthanticated: false,
  },
  reducers: {
    INITIAL_APP_LOADING: (state) => {
      console.log("[INITIAL_APP_LOADING] called");
    },
    LOGIN: (state, action) => {
      console.log("[LOGIN] called");
    },
    LOGOUT: (state, aciton) => {
      console.log("[LOGOUT] called");
    },
    REGISTER: (state, action) => {
      console.log("[REGISTER] called");
    },
    FORGOT_PASSWORD: (state, action) => {
      console.log("[FORGOT_PASSWORD] called");
    },
  },
});

export const {
  INITIAL_APP_LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} = authSlice.actions;

export default authSlice.reducer;
