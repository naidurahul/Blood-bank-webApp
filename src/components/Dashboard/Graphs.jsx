import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
Chart.register(...registerables);

const Graphs = () => {
  const [bloodStocks, setBloodStocks] = useState([]);
  const [donorList, setDonorList] = useState([]);
  const [dataForGraph, setDataForGraph] = useState();
  const label = ["A+", "A-", "B+", "B-", "O+", "O-", "AB"];
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/stock");
      setBloodStocks(data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchDonor = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/all/donations"
      );
      setDonorList(data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
    fetchDonor();
  }, []);
  useEffect(() => {
    const bloodData = label?.map(
      (x) => bloodStocks?.find((i) => i.bg === x)?.stock ?? 0
    );
    const donorData = label?.map(
      (x) => donorList?.filter((i) => i.bloodGroup === x)?.length ?? 0
    );
    setDataForGraph({ bloodData, donorData });
  }, [donorList, bloodStocks]);
  console.log(dataForGraph);

  return (
    <>
      <div className="d-flex mt-5">
        <div style={{ height: 500, width: 550 }} className="ml-0">
          <Bar
            style={{ width: "100%" }}
            data={{
              labels: label,
              datasets: [
                {
                  label: "Blood Stock",
                  data: dataForGraph?.bloodData,
                  backgroundColor: [
                    "#e27c7c",
                    "#a86464",
                    "#6d4b4b",
                    "#503f3f",
                    "#333333",
                    "#3c4e4b",
                    "#466964",
                  ],
                  borderColor: [
                    "#e27c7c",
                    "#a86464",
                    "#6d4b4b",
                    "#503f3f",
                    "#333333",
                    "#3c4e4b",
                    "#466964",
                  ],
                  borderWidth: 2,
                },
              ],
            }}
          />
        </div>
        <div style={{ height: 500, width: 550 }} className="ml-2">
          <Bar
            style={{ width: "100%" }}
            data={{
              labels: label,
              datasets: [
                {
                  label: "Blood Donor",
                  data: dataForGraph?.donorData,
                  backgroundColor: [
                    "#bfcbdb",
                    "#b3bfd1",
                    "#a4a2a8",
                    "#df8879",
                    "#c86558",
                    "#b04238",
                    "#991f17",
                  ],
                  borderColor: [
                    "#bfcbdb",
                    "#b3bfd1",
                    "#a4a2a8",
                    "#df8879",
                    "#c86558",
                    "#b04238",
                    "#991f17",
                  ],
                  borderWidth: 2,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Graphs;
