import { Chart, registerables } from "chart.js";
import React from "react";
import Camps from "./blood-camps/Camps";
import BloodRequest from "./blood-request/BloodRequest";
import BloodStock from "./blood-stocks/BloodStock";
import DonorRegistration from "./donor-reg/DonorRegistration";
Chart.register(...registerables);

const OverallDashboard = () => {
  return (
    <>
      <div className="w-100 mt-2">
        <div className="d-flex">
          <BloodStock />
          <Camps />
        </div>
        <div className="d-flex">
          <DonorRegistration />
          <BloodRequest />
        </div>
      </div>
    </>
  );
};

export default OverallDashboard;
