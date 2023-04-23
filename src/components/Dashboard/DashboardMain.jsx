import React, { useEffect, useState } from "react";
import {
  BarChartLine,
  BoxArrowDownRight,
  BoxArrowRight,
  Calculator,
  CaretRightFill,
  Droplet,
  DropletFill,
  Hospital,
  PersonCheck,
  Send,
  UiChecks,
  UiChecksGrid,
} from "react-bootstrap-icons";
import OverallDashboard from "./overall/OverallDashboard";
import { useNavigate } from "react-router-dom";
import BloodStock from "./blood-stocks/BloodStock";
import { Alert } from "react-bootstrap";
import BloodRequest from "./blood-request/BloodRequest";
import Graphs from "./Graphs";
const tabs = [
  {
    tabName: "Overall Data",
    component: <OverallDashboard />,
    icon: (
      <UiChecks size={30} className="my-4 hover" style={{ marginLeft: 40 }} />
    ),
  },
  {
    tabName: "Blood Stock",
    component: <Graphs />,
    icon: (
      <BarChartLine
        size={30}
        className="my-4 hover"
        style={{ marginLeft: 40 }}
      />
    ),
  },
  {
    tabName: "Feedbacks",
    component: <Graphs />,
    icon: (
      <Send
        size={30}
        className="my-4 hover"
        style={{ marginLeft: 40 }}
      />
    ),
  },
];
const DashboardMain = () => {
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
      <div className="d-flex">
        <div
          style={{ width: 120, height: "100vh" }}
          className="bg-dark mt-2 text-white "
        >
          <h6 className="text-center my-2">DASHBOARD</h6>
          {tabs?.map((tab) => {
            return <span onClick={() => setActiveTab(tab)}> {tab.icon}</span>;
          })}
          <BoxArrowRight
            size={30}
            className="my-4 hover"
            style={{ marginLeft: 40 }}
            onClick={onLogout}
          />
        </div>
        <div className="bg-light w-100 p-2 ml-2">
          <Alert variant="dark" className="px-1 w-25 py-0">
            <h6 className="d-flex mb-0">
              Dashboard <CaretRightFill /> {activeTab?.tabName}
            </h6>
          </Alert>
          {activeTab?.component}
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
