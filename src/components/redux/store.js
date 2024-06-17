import { createStore } from "redux";
import employeeReducer from "./reducers";

const store = createStore(
  employeeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
