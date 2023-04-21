import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Nabvar/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Dashboard from "../components/Dashboard/Dashboard";
import DonorRegistration from "../components/DonorRegistration/DonorRegistration";
import LiveBloodCamp from "../components/LiveBloodCamp/LiveBloodCamp";
import RequestBlood from "../components/RequestBlood/RequestBlood";
import SearchDonor from "../components/SearchDonor/SearchDonor";
import Home from "./Home";
import DashboardMain from "../components/Dashboard/DashboardMain";

const GlobalRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="m-1 p-2 text-dark">
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<DashboardMain />} path="/admin/dashboard" />
          <Route element={<DonorRegistration />} path="/donor-registration" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route element={<LiveBloodCamp />} path="/live-blood-camp" />
          <Route element={<RequestBlood />} path="/request-blood" />
          <Route element={<SearchDonor />} path="/search-donor" />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default GlobalRoutes;
