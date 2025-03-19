import { createSlice } from "@reduxjs/toolkit";
import * as status from "../../constants/auth";
import {
  getTaks,
  createTaks,
  updateTaks,
  deleteTaks,
} from "../thunks/taksThunk";

const taksSlice = createSlice({
  name: "taks",
  initialState: {
    status: status.IDLE,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Taks Cases
      .addCase(getTaks.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(getTaks.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = action.payload?.data;
        state.error = null;
      })
      .addCase(getTaks.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Create Taks Cases
      .addCase(createTaks.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(createTaks.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = state.data.push(action.payload?.data);
        state.error = null;
      })
      .addCase(createTaks.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Update Taks Cases
      .addCase(updateTaks.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(updateTaks.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = state.data.map((item) => {
          if (item.id === action.payload?.data.id) {
            return action.payload?.data;
          }
          return item;
        });
      })
      .addCase(updateTaks.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Delete Taks Cases
      .addCase(deleteTaks.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(deleteTaks.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = state.data.filter(
          (item) => item.id !== action.payload?.data.id
        );
        state.error = null;
      })
      .addCase(deleteTaks.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      });
  },
});

export default taksSlice.reducer;
