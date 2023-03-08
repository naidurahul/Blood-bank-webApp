import React, { useState } from "react";
import { XLg } from "react-bootstrap-icons";
import BloodCamps from "./BloodCamps";
import BloodStocks from "./BloodStocks";
import "./Dashboard.css";
import DonorRegistrationDetails from "./Donor";
import Request from "./Request";
const tabs = [
  {
    tabName: "Donors",
    component: <DonorRegistrationDetails />,
  },
  {
    tabName: "Blood Camp",
    component: <BloodCamps />,
  },
  {
    tabName: "Blood Stock",
    component: <BloodStocks />,
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
      <div className="container-body m-1">
        <div className="d-flex h-100">
          <div className="side-nav bg-white h-100 p-2">
            <div className="d-flex justify-content-between text-dark">
              <h5>Dashboard</h5>
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
          <div className="pl-2 w-100" style={{}}>
            {activeTab.component}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
