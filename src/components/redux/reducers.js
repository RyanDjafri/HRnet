import { ADD_EMPLOYEE, GET_EMPLOYEE } from "./actionTypes";

const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case GET_EMPLOYEE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default employeeReducer;
