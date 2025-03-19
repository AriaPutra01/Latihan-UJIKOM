import { createSlice } from "@reduxjs/toolkit";
import * as status from "../../constants/auth";
import {
  loginUser,
  registerUser,
  getUser,
  logoutUser,
} from "../thunks/authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: status.IDLE,
    data: null,
    error: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login Cases
      .addCase(loginUser.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.token = action.payload?.data?.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Register Cases
      .addCase(registerUser.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = status.SUCCESS;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Get User Cases
      .addCase(getUser.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Logout Cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = false;
        state.data = null;
        state.token = null;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
