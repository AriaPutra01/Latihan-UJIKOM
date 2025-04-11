import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

// get Taks
export const getTaks = createAsyncThunk(
  "todo/getTaks",
  async ({ token, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/taks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(error.response?.data || "Gagal mengambil data");
    }
  }
);

// create Taks
export const createTaks = createAsyncThunk(
  "todo/createTaks",
  async ({ token, field, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/taks", field, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(error.response?.data || "Gagal mengambil data");
    }
  }
);

// update Taks
export const updateTaks = createAsyncThunk(
  "todo/updateTaks",
  async ({ token, id, field, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/taks/${id}`, field, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(error.response?.data || "Gagal mengambil data");
    }
  }
);

// delete Taks
export const deleteTaks = createAsyncThunk(
  "todo/deleteTaks",
  async ({ token, id, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/taks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (onSuccess) onSuccess(response.data);
      return response.data;
    } catch (error) {
      if (onError) onError(error.response?.data);
      return rejectWithValue(error.response?.data || "Gagal mengambil data");
    }
  }
);
