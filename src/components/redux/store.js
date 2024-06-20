import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducers";

const store = configureStore({ reducer: employeeReducer });

export default store;
