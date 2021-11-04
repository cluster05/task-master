import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    success: false,
    error: false,
    warning: false,
    info: false,
    message: "",
  },
  reducers: {
    SHOW_SUCCESS_ALERT: (state, payload) => {
      console.log("[SHOW_SUCCESS_ALERT] called");
      state.success = true;
      state.message = payload.message;
      setTimeout(() => {
        state.success = false;
        state.message = "";
      }, 3000);
    },
    SHOW_ERROR_ALERT: (state, payload) => {
      console.log("[SHOW_ERROR_ALERT] called");
      state.error = true;
      state.message = payload.message;

      setTimeout(() => {
        state.error = false;
        state.message = "";
      }, 3000);
    },
    SHOW_WARNING_ALERT: (state, payload) => {
      console.log("[SHOW_WARNING_ALERT] called");
      state.warning = true;
      state.message = payload.message;

      setTimeout(() => {
        state.warning = false;
      }, 3000);
    },
    SHOW_INFO_ALERT: (state, payload) => {
      console.log("[SHOW_INFO_ALERT] called");
      state.info = true;
      state.message = payload.message;

      setTimeout(() => {
        state.info = false;
        state.message = "";
      }, 3000);
    },
  },
});

export const {
  SHOW_SUCCESS_ALERT,
  SHOW_ERROR_ALERT,
  SHOW_WARNING_ALERT,
  SHOW_INFO_ALERT,
} = alertSlice.actions;

export default alertSlice.reducer;
