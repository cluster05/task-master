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
      state.message = payload.payload.message;
    },
    SHOW_ERROR_ALERT: (state, payload) => {
      console.log("[SHOW_ERROR_ALERT] called");
      state.error = true;
      state.message = payload.payload.message;
    },
    SHOW_WARNING_ALERT: (state, payload) => {
      console.log("[SHOW_WARNING_ALERT] called");
      state.warning = true;
      state.message = payload.payload.message;
    },
    SHOW_INFO_ALERT: (state, payload) => {
      console.log("[SHOW_INFO_ALERT] called");
      state.info = true;
      state.message = payload.payload.message;
    },
    RESET_ERROR_STATE: (state) => {
      state.success = false;
      state.error = false;
      state.warning = false;
      state.info = false;
      state.message = "";
    },
  },
});

export const {
  SHOW_SUCCESS_ALERT,
  SHOW_ERROR_ALERT,
  SHOW_WARNING_ALERT,
  SHOW_INFO_ALERT,
  RESET_ERROR_STATE,
} = alertSlice.actions;

export default alertSlice.reducer;
