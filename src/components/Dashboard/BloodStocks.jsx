import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PenFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { addOrUpdateItemInArray } from "../../global/constants";
import EditBloodStock from "./EditBloodStock";

const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodStocks = () => {
  const [openEditBloodStock, setOpenEditBloodStock] = useState(null);
  const [bloodStocks, setBloodStocks] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  console.log(bloodStocks, "bloodStocks");
  const onFormSubmit = (data) => {
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
  const fetchData = async () => {
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
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Row>
          {bloodGroup.map((bg) => {
            return (
              <Col
                xs={6}
                md={3}
                lg={3}
                className="pb-2"
                style={{ height: 200 }}
              >
                <div className="bg-light rounded text-dark h-100  px-2">
                  <div className="d-flex justify-content-between border-bottom pt-2 ">
                    <h6>{bg}</h6>{" "}
                    <PenFill
                      className="text-green hover"
                      onClick={() =>
                        setOpenEditBloodStock(
                          bloodStocks?.find((x) => x.bg === bg)
                        )
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <h6>
                      Stock Available :
                      {bloodStocks?.find((x) => x.bg === bg)?.stock ?? "N/A"}{" "}
                    </h6>
                    <h6>Donor Registered({bg}) :</h6>
                    <h6>Available :</h6>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <EditBloodStock
        openEditBloodStock={openEditBloodStock}
        handleClose={() => setOpenEditBloodStock(null)}
      />
    </>
  );
};

export default BloodStocks;
