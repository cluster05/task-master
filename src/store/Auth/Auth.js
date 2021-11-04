import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthanticated: false,
  },
  reducers: {
    initailAppAuthCheck: (state) => {
      console.log("[initailAppAuthCheck] called");
    },
    register: (state, action) => {
      console.log("[register] called");
    },
    login: (state, aciton) => {
      console.log("[login] called");
    },
    logout: (state, action) => {
      console.log("[logout] called");
    },
    forgotPassword: (state, action) => {
      console.log("[forgotPassword] called");
    },
    resetPassoword: (state, action) => {
      console.log("[resetPassoword] called");
    },
  },
});

export const {
  initailAppAuthCheck,
  register,
  login,
  logout,
  forgotPassword,
  resetPassoword,
} = authSlice.actions;

export default authSlice.reducer;
