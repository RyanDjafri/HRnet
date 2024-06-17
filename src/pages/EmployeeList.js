import React, { useState, useMemo } from "react";
import EmployeeDataTable from "../components/DataTable";

const EmployeeList = () => {
  const [filterText, setFilterText] = useState("");

  const data = useMemo(
    () => [
      {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1990-01-01",
        startDate: "2020-01-01",
        department: "HR",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        dateOfBirth: "1985-05-15",
        startDate: "2019-07-23",
        department: "Engineering",
        street: "456 Elm St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94101",
      },
    ],
    []
  );

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
    <div>
      <h1>Current Employees</h1>
      <EmployeeDataTable columns={columns} data={filteredData} />
    </div>
  );
};

export default EmployeeList;
