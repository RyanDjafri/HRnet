const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

export default employeeReducer;
