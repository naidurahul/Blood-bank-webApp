import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalRoutes from "./Pages/GlobalRoutes";
import Home from "./Pages/Home";
import AuthenticatedRoutes from "./Pages/AuthenticatedRoutes";
import Login from "./Pages/Login";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<AuthenticatedRoutes />} path="/admin" />
          <Route element={<GlobalRoutes />} path="/*" />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
