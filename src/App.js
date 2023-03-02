import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard/dashboard/Dashboard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import BloodRequestFrom from "./Pages/BloodRequestForm/BloodRequestForm";
import Contact from "./Pages/Contact/Contact";
import DonorRegistration from "./Pages/DonorReg/DonorReg";
import Home from "./Pages/Home/Home";
import LiveCamps from "./Pages/LiveCamps/LiveCamps";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<DonorRegistration />} path="/donor-registration" />
          <Route element={<Search />} path="/search" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Login />} path="/login" />
          <Route element={<BloodRequestFrom />} path="/blood-request-form" />
          <Route element={<LiveCamps />} path="/live-blood-camp" />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
