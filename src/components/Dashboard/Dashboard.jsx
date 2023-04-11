import React, { useEffect, useState } from "react";
import { BoxArrowDownRight, BoxArrowRight, XLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import BloodCamps from "./BloodCamps";
import BloodStocks from "./BloodStocks";
import "./Dashboard.css";
import DonorRegistrationDetails from "./Donor";
import Feedback from "./Feedback";
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
  {
    tabName: "Feedbacks",
    component: <Feedback />,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const onLogout = () => {
    localStorage.removeItem("user");
    navigate(`/login`, { replace: true });
  };
  useEffect(() => {
    if (!user) {
      navigate(`/login`, { replace: true });
    }
  }, [user]);
  return (
    <>
      <div className="container-body m-1">
        <div className="d-flex h-100">
          <div className="side-nav bg-white h-100 p-2">
            <div className="d-flex justify-content-between text-dark">
              <h5>Dashboard</h5>{" "}
              <BoxArrowRight className="hover" onClick={onLogout} />
            </div>
            <div className="bar" />
            <div className="mt-2">
              {tabs.map((tab) => {
                return (
                  <h6
                    key={tab.tabName}
                    className={`${
                      activeTab.tabName === tab.tabName
                        ? "bg-primary-light text-dark"
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
          <div className="pl-2 w-100" style={{ overflowY: "scroll" }}>
            {activeTab.component}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
