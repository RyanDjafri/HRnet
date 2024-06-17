import { ADD_EMPLOYEE, GET_EMPLOYEE } from "./actionTypes";

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const getEmployees = () => ({
  type: GET_EMPLOYEE,
});
