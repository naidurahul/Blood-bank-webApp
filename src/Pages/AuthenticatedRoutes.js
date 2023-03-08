import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Nabvar/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";

const AuthenticatedRoutes = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    console.log(user, "user");
  }
  return (
    <>
      <Navbar />
      <div className="m-1 p-2 text-white">
        <Routes>
          <Route element={<Dashboard />} path="/admin/dashboard" />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default AuthenticatedRoutes;
