import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ field, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", field);
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(error.response?.data || "Login gagal");
    }
  }
);

// Register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ field, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", field);
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(error.response?.data || "Registrasi gagal");
    }
  }
);

// Get User Info
export const getUser = createAsyncThunk(
  "auth/getUser",
  async ({ token, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(
        error.response?.data || "Gagal mengambil data user"
      );
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async ({ token, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/logout", null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(error.response?.data || "Logout gagal");
    }
  }
);
