import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import { Card } from "react-bootstrap";
import { DatabaseX, DropletHalf, HCircle, Person } from "react-bootstrap-icons";
import Loader from "../../common/Loader";
Chart.register(...registerables);

const Graphs = () => {
  const [bloodStocks, setBloodStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [donorList, setDonorList] = useState([]);
  const [dataForGraph, setDataForGraph] = useState();
  const label = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+"];
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/stock");
      setBloodStocks(data.msg);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error.message);
    }
  };
  const fetchDonor = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/all/donations"
      );
      setLoading(false);
      setDonorList(data.msg);
    } catch (error) {
      setLoading(false);
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
      <div className="d-flex mt-2">
        <Card className="w-50 ">
          <Card.Header className="py-0 px-0 text-center">
            <h6 className="my-2 xxlarge d-flex">
              <DropletHalf size={30} className="mt-0 mr-1" />
              Blood Stock{" "}
            </h6>
          </Card.Header>{" "}
          {loading ? (
            <div className="px-2">
              <Loader />
            </div>
          ) : (
            <>
              <div style={{ height: 300, width: 550 }} className="ml-0">
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
            </>
          )}
        </Card>{" "}
        <Card className="w-50 ml-2">
          <Card.Header className="py-0 px-1 d-flex justify-content-between text-center">
            <h6 className="my-2 xxlarge d-flex">
              <Person size={30} className="mt-0 mr-1" />
              Blood Donors
            </h6>
          </Card.Header>
          {loading ? (
            <div className="px-2">
              <Loader />
            </div>
          ) : (
            <>
              <div style={{ height: 300, width: 550 }} className="ml-2">
                <Bar
                  style={{ width: "100%" }}
                  data={{
                    labels: label,
                    datasets: [
                      {
                        label: "Blood Donor",
                        data: dataForGraph?.donorData,
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
            </>
          )}
        </Card>{" "}
      </div>
    </>
  );
};

export default Graphs;
