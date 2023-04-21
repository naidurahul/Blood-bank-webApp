import React, { useEffect, useState } from "react";
import {
  BoxArrowDownRight,
  BoxArrowRight,
  Calculator,
  Hospital,
  PersonCheck,
  UiChecks,
  UiChecksGrid,
} from "react-bootstrap-icons";
import OverallDashboard from "./overall/OverallDashboard";
import { useNavigate } from "react-router-dom";
const tabs = [
  {
    tabName: "overall",
    component: <OverallDashboard />,
    icon: (
      <UiChecks size={30} className="my-4 hover" style={{ marginLeft: 40 }} />
    ),
  },
  {
    tabName: "Blood Camp",
    component: <OverallDashboard />,
    icon: (
      <Calculator size={30} className="my-4 hover" style={{ marginLeft: 40 }} />
    ),
  },
  {
    tabName: "Blood Stock",
    component: <OverallDashboard />,
    icon: (
      <PersonCheck
        size={30}
        className="my-4 hover"
        style={{ marginLeft: 40 }}
      />
    ),
  },
  {
    tabName: "Blood Requests",
    component: <OverallDashboard />,
    icon: (
      <Hospital size={30} className="my-4 hover" style={{ marginLeft: 40 }} />
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
          className="bg-dark text-white "
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
        <div className="bg-light w-100 p-2 ml-2">{activeTab?.component}</div>
      </div>
    </>
  );
};

export default DashboardMain;
