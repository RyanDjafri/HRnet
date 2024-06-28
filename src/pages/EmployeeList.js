import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import EmployeeDataTable from "../components/DataTable";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  const [filterText, setFilterText] = useState("");

  const data = useSelector((state) => state.employees);

  const columns = useMemo(
    () => [
      { name: "First Name", selector: (row) => row.firstName, sortable: true },
      { name: "Last Name", selector: (row) => row.lastName, sortable: true },
      {
        name: "Date of Birth",
        selector: (row) => row.dateOfBirth,
        sortable: true,
      },
      { name: "Start Date", selector: (row) => row.startDate, sortable: true },
      { name: "Department", selector: (row) => row.department, sortable: true },
      { name: "Street", selector: (row) => row.street, sortable: true },
      { name: "City", selector: (row) => row.city, sortable: true },
      { name: "State", selector: (row) => row.state, sortable: true },
      { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
    ],
    []
  );

  const filteredData = data.filter(
    (item) =>
      item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="employee-container">
      <h2 className="employee-title">Current employees</h2>
      <EmployeeDataTable columns={columns} data={filteredData} />
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default EmployeeList;
