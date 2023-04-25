import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Nabvar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";
import DashboardMain from "../components/Dashboard/DashboardMain";
import DonorRegistration from "../components/DonorRegistration/DonorRegistration";
import LiveBloodCamp from "../components/LiveBloodCamp/LiveBloodCamp";
import RequestBlood from "../components/RequestBlood/RequestBlood";
import Home from "./Home";

const GlobalRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="m-1 p-2 text-dark">
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<DashboardMain />} path="/admin/dashboard" />
          <Route element={<DonorRegistration />} path="/donor-registration" />
          <Route element={<ContactUs />} path="/give-feedback" />
          <Route element={<LiveBloodCamp />} path="/live-blood-camp" />
          <Route element={<RequestBlood />} path="/request-blood" />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default GlobalRoutes;
