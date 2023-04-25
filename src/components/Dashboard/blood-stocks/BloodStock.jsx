import { Chart, registerables } from "chart.js";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import AB from "../../../assets/AB.png";
import AN from "../../../assets/AN.png";
import AP from "../../../assets/AP.png";
import BN from "../../../assets/BN.png";
import BP from "../../../assets/BP.png";
import ON from "../../../assets/ON.png";
import OP from "../../../assets/OP.png";
import { addOrUpdateItemInArray } from "../../../global/constants";
import axios from "axios";
import { toast } from "react-toastify";
import EditBloodStock from "./EditBloodStock";
import { DropletHalf, PencilSquare } from "react-bootstrap-icons";
import Loader from "../../../common/Loader";
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
const BloodStock = () => {
  const [openEditBloodStock, setOpenEditBloodStock] = useState(null);
  const [bloodStocks, setBloodStocks] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);

  const onFormSubmit = (data) => {
    console.log(data);
    if (data.mode === "add") {
      addBloodStock(data.data);
    } else {
      editBloodStock(data.data);
    }
  };

  const addBloodStock = async (details) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/api/v1/stock`, {
        ...details,
      });
      if (data.status) {
        toast.success("Succesfully Added");
        setBloodStocks([...addOrUpdateItemInArray(bloodStocks, data.msg)]);
        setOpenEditBloodStock(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const editBloodStock = async (details) => {
    try {
      const { data } = await axios.put(`http://localhost:4000/api/v1/stock`, {
        ...details,
      });
      if (data.status) {
        console.log(data.msg);
        setBloodStocks([...addOrUpdateItemInArray(bloodStocks, data.msg)]);
        toast.success("Succesfully Edited");
        setOpenEditBloodStock(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchBloodStock = async () => {
    try {
      setFetchingData(true);
      const { data } = await axios.get("http://localhost:4000/api/v1/stock");
      setBloodStocks(data.msg);
      setFetchingData(false);
    } catch (error) {
      console.log(error.message);
      setFetchingData(false);
    }
  };

  useEffect(() => {
    fetchBloodStock();
  }, []);
  return (
    <>
      <Card className="w-50">
        <Card.Header className="py-0 px-0 text-center">
          <h6 className="my-2 xxlarge d-flex">
            <DropletHalf size={30} className="mt-0 mr-1" />
            Blood Stock{" "}
          </h6>
        </Card.Header>{" "}
        {fetchingData ? (
          <div className="px-2">
            <Loader />
          </div>
        ) : (
          <Row className="">
            {bloodGroup?.map((b, index) => {
              return (
                <>
                  <Col xs={4} md={4} className="d-flex my-2">
                    <Image
                      className="hover"
                      src={b.image}
                      width={50}
                      onClick={() =>
                        setOpenEditBloodStock(
                          bloodStocks?.find((x) => x.bg === b.bg) ?? {
                            bg: b.bg,
                          }
                        )
                      }
                    />
                    <div>
                      <h6 className="xxxlarge d-flex mb-0">
                        {" "}
                        {bloodStocks?.find((x) => x.bg === b.bg)?.stock ??
                          "0"}{" "}
                        <PencilSquare
                          size={15}
                          className="mt-2 ml-2 hover"
                          onClick={() =>
                            setOpenEditBloodStock(
                              bloodStocks?.find((x) => x.bg === b.bg) ?? {
                                bg: b.bg,
                              }
                            )
                          }
                        />
                      </h6>
                      <h6 className="large ml-1 text-muted mb-0">Pint</h6>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        )}
      </Card>{" "}
      <EditBloodStock
        openEditBloodStock={openEditBloodStock}
        handleClose={() => setOpenEditBloodStock(null)}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
};

export default BloodStock;
