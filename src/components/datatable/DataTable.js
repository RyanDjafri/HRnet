import React from "react";

const DataTable = ({ title, columns, data }) => {
  return (
    <div>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((employee, index) => (
              <tr key={index}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{employee[column.data]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
