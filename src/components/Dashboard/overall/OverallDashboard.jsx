import { Chart, registerables } from "chart.js";
import React from "react";
import { Button, Card, Col, Image, Row, Table } from "react-bootstrap";
import {
  CardChecklist,
  CheckCircleFill,
  HCircle,
  PencilSquare,
  XCircleFill,
} from "react-bootstrap-icons";
import AB from "../../../assets/AB.png";
import AN from "../../../assets/AN.png";
import AP from "../../../assets/AP.png";
import BN from "../../../assets/BN.png";
import BP from "../../../assets/BP.png";
import ON from "../../../assets/ON.png";
import OP from "../../../assets/OP.png";
import { donorFieldsToShowInTable } from "../../../global/constants";
import Camps from "../blood-camps/Camps";
import BloodStock from "../blood-stocks/BloodStock";
import DonorRegistration from "../donor-reg/DonorRegistration";
import BloodRequest from "../blood-request/BloodRequest";
Chart.register(...registerables);

const bloodGroup = [
  { bg: "A+", image: AP },
  { bg: "A-", image: AN },
  { bg: "B+", image: BP },
  { bg: "B-", image: BN },
  { bg: "O+", image: OP },
  { bg: "O-", image: ON },
  { bg: "AB+", image: AB },
];
const OverallDashboard = () => {
  return (
    <>
      <div className="w-100">
        <div className="d-flex">
          <BloodStock />
          <Camps />
        </div>
        <div style={{ height: 250 }} className="d-flex">
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
