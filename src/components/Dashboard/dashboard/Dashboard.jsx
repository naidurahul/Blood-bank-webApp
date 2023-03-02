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
              <h5>Admin Dashboard</h5>
              <XLg size={18} className="hover mt-1" />
            </div>
            <div className="bar" />
            <div className="mt-2 pl-1">
              {tabs.map((tab) => {
                return (
                  <Alert
                    key={tab.tabName}
                    className="hover w-100   rounded p-1 m-0 "
                    style={{
                      backgroundColor:
                        activeTab.tabName === tab.tabName ? "#eb7a7a" : "white",
                      color:
                        activeTab.tabName === tab.tabName ? "white" : "black",
                      border: "none",
                    }}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.tabName}
                  </Alert>
                );
              })}
            </div>
          </div>
          <div
            className="dashboard-body w-100 p-2"
            style={{ overflowY: "scroll" }}
          >
            {activeTab.component}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
