import { createSlice } from "@reduxjs/toolkit";
import * as status from "../../constants/auth";
import {
  getList,
  createList,
  updateList,
  deleteList,
} from "../thunks/listThunk";

const listSlice = createSlice({
  name: "list",
  initialState: {
    status: status.IDLE,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get List Cases
      .addCase(getList.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = action.payload?.data;
        state.error = null;
      })
      .addCase(getList.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Create List Cases
      .addCase(createList.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(createList.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = state.data.concat(action.payload?.data);
        state.error = null;
      })
      .addCase(createList.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Update List Cases
      .addCase(updateList.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(updateList.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = state.data.map((item) => {
          if (item.id === action.payload?.data?.id) {
            return action.payload?.data;
          }
          return item;
        });
        state.error = null;
      })
      .addCase(updateList.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      })

      // Delete List Cases
      .addCase(deleteList.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(deleteList.fulfilled, (state, action) => {
        state.status = status.SUCCESS;
        state.data = state.data.filter(
          (item) => item.id !== action.payload?.data?.id
        );
        state.error = null;
      })
      .addCase(deleteList.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      });
  },
});

export default listSlice.reducer;
