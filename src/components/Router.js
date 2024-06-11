import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import EmployeeList from "../pages/EmployeeList";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
