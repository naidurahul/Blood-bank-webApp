import { Chart, registerables } from "chart.js";
import React from "react";
import Camps from "../blood-camps/Camps";
import BloodRequest from "../blood-request/BloodRequest";
import BloodStock from "../blood-stocks/BloodStock";
import DonorRegistration from "../donor-reg/DonorRegistration";
Chart.register(...registerables);

const OverallDashboard = () => {
  return (
    <>
      <div className="w-100">
        <div className="d-flex">
          <BloodStock />
          <Camps />
        </div>
        <div  className="d-flex">
          <DonorRegistration />
          <BloodRequest />
        </div>
      </div>
    </>
  );
};

export default OverallDashboard;

// <Card className="mt-3 w-50 p-2">
//   <Bar
//     options={{ aspectRatio: 3 }}
//     data={{
//       labels: ["A+", "A-", "B+", "B-", "O-", "AB", "O+"],
//       datasets: [
//         {
//           label: "Blood Stock in Bar Graph",
//           data: [6, 12, 32, 12, 54, 21, 43],
//           backgroundColor: [
//             "#0A2342",
//             "#2CA58D",
//             "#84BC9C",
//             "#CBA328",
//             "#F46197",
//             "#DBCFB0",
//             "#545775",
//           ],
//           borderColor: [
//             "#0A2342",
//             "#2CA58D",
//             "#84BC9C",
//             "#CBA328",
//             "#F46197",
//             "#DBCFB0",
//             "#545775",
//           ],
//           borderWidth: 2,
//         },
//       ],
//     }}
//   />
// </Card>;
