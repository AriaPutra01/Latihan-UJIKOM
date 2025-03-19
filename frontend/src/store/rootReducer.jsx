import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import listReducer from "./slices/listSlice";
import taksReducer from "./slices/taksSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer,
  taks: taksReducer,
});

export default rootReducer;
