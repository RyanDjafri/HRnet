import React from "react";
import DataTable from "react-data-table-component";

const EmployeeDataTable = ({ columns, data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      striped
      subHeader
      subHeaderComponent={<input type="text" placeholder="Filter by name" />}
    />
  );
};

export default EmployeeDataTable;
