import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PenFill } from "react-bootstrap-icons";
import AddOrEditBloodCamps from "./AddOrEditModal";

const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodStocks = () => {
  const [openEditBloodStock, setOpenEditBloodStock] = useState(null);
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
                      onClick={() => setOpenEditBloodStock({ bg })}
                    />
                  </div>
                  <div className="mt-2">
                    <h6>Stock Available :</h6>
                    <h6>Donor Registered({bg}) :</h6>
                    <h6>Available :</h6>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <AddOrEditBloodCamps
        openEditOrAddFormModal={openEditBloodStock}
        handleClose={() => setOpenEditBloodStock(null)}
      />
    </>
  );
};

export default BloodStocks;
