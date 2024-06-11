import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "./DataTable";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);
  const [filterText, setFilterText] = useState("");

  const columns = [
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
  ];

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredData = employees.filter((item) =>
    columns.some((column) =>
      item[column.selector]
        ?.toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Current Employees</h1>
      <input
        type="text"
        placeholder="Filter"
        value={filterText}
        onChange={handleFilterChange}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default EmployeeList;
