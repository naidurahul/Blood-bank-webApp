import React, { useState } from "react";
import { Alert, Badge } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import BloodStock from "../BloodStock";
import Camps from "../Camps";
import DonorRegistrationDetails from "../Donor";
import Request from "../Request";
import "./Dashboard.css";
const tabs = [
  {
    tabName: "Donors",
    component: <DonorRegistrationDetails />,
  },
  {
    tabName: "Blood Camp",
    component: <Camps />,
  },
  {
    tabName: "Blood Stock",
    component: <BloodStock />,
  },
  {
    tabName: "Blood Requests",
    component: <Request />,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <div className="container-body bg-primary m-1">
        <div className="d-flex h-100">
          <div className="side-nav h-100 p-2">
            <div className="d-flex justify-content-between">
              <h5>Dashboard</h5>
              <XLg size={18} className="hover mt-1" />
            </div>
            <div className="bar" />
            <div className="mt-2">
              {tabs.map((tab) => {
                return (
                  <h6
                    key={tab.tabName}
                    className={`${
                      activeTab.tabName === tab.tabName
                        ? "bg-primary-light text-white"
                        : "bg-white text-dark"
                    } hover w-100 font-weight-light xlarge p-1 m-0`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.tabName}
                  </h6>
                );
              })}
            </div>
          </div>
          <div
            className="bg-light w-100  p-2"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            {activeTab.component}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
