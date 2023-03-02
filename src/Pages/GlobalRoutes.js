import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../common/Nabvar/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Dashboard from "../components/Dashboard/Dashboard";
import DonorRegistration from "../components/DonorRegistration/DonorRegistration";
import LiveBloodCamp from "../components/LiveBloodCamp/LiveBloodCamp";
import RequestBlood from "../components/RequestBlood/RequestBlood";
import SearchDonor from "../components/SearchDonor/SearchDonor";

const GlobalRoutes = () => {
  console.log("hello");
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route element={<Dashboard />} path="/admin/dashboard" />
          <Route element={<DonorRegistration />} path="/donor-registration" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route element={<LiveBloodCamp />} path="/live-blood-camp" />
          <Route element={<RequestBlood />} path="/request-blood" />
          <Route element={<SearchDonor />} path="/search-donor" />
        </Routes>
      </div>
    </>
  );
};

export default GlobalRoutes;
