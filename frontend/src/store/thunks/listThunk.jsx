import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

// get List
export const getList = createAsyncThunk(
  "todo/getList",
  async ({ token, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/list", null, {
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

// create List
export const createList = createAsyncThunk(
  "todo/createList",
  async ({ token, field, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/list", field, {
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

// update List
export const updateList = createAsyncThunk(
  "todo/updateList",
  async ({ token, id, field, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/list/${id}`, field, {
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

// delete List
export const deleteList = createAsyncThunk(
  "todo/deleteList",
  async ({ token, id, onSuccess, onError }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/list/${id}`, {
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
