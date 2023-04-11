import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Dropdown, Form, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";
import {
  bloodRequestFields,
  otherPlaceForBloodDonation,
} from "../../global/constants";

const RequestBlood = () => {
  const [bloodRequestDetails, setBloodRequestDetails] = useState({});

  const saveDonorDetails = async (details) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/blood-request`,
        { ...details }
      );
      if (data.status) {
        toast.success("Succesfully Registered");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSaveDonorDetails = () => {
    const emptyFields = bloodRequestFields.find(
      (x) => !bloodRequestDetails[x.name]
    );
    if (emptyFields) {
      return toast.error(`${emptyFields.label} is Required`);
    }
    saveDonorDetails(bloodRequestDetails);
  };

  return (
    <>
      <h6 className="xxxxlarge text-center text-dark  mb-4">
        <Typewriter
          options={{
            strings: ["Are you searching for Blood?", "Want Blood?"],

            autoStart: true,
            loop: true,
          }}
        />
      </h6>
      <Row noGutters>
        <Col xs={12} md={6} lg={6}>
          <div className="px-2 pt-2 border rounded mb-2">
            <h6 className="xxxxlarge text-primary mb-0">
              <span className="xxxxlarge text-dark">Others Place to</span>{" "}
              Donate Blood
            </h6>{" "}
            <p>
              To donate outside Kathmandu Valley, please contact one of the
              Regional Blood Transfusion Centres in Biratnagar, Pokhara,
              Nepalgunj, and Chitwan, or the nearest District Blood Bank or
              Hospital unit.
            </p>
            <div className="text-muted">
              <Table striped bordered hover size="sm" className="bg-white ">
                <thead className="bg-primary text-light">
                  <tr>
                    <th className="thin-fw">District</th>
                    <th className="thin-fw">Focal Person</th>
                    <th className="thin-fw">Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  {otherPlaceForBloodDonation.map((center) => {
                    return (
                      <tr key={center.phone}>
                        <td className="thin-fw large">{center.bloodCenter}</td>
                        <td className="thin-fw large">
                          {center.contactPerson}
                        </td>
                        <td className="thin-fw large">{center.phone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Card className="p-2 px-3">
            <h6 className="xxlarge mb-0 text-dark">Blood Request Form</h6>
            <h6 className="mid text-muted" style={{ fontWeight: 400 }}>
              Please consider donating blood to help save lives and support the
              well-being of others. Your generous act of kindness and compassion
              can make a real and positive difference in the world. Thank you
              for considering this important opportunity to give back to your
              community.
            </h6>
            <Row noGutters className="">
              {bloodRequestFields.map((field) => {
                return (
                  <Col
                    xs={12}
                    md={6}
                    lg={6}
                    key={field.name}
                    className={`my-2`}
                  >
                    <h6 className="mid-font text-dark mb-1">
                      {field.label}
                      {field?.required && (
                        <span className="text-red" style={{ color: "red" }}>
                          *
                        </span>
                      )}
                    </h6>
                    {field.type === "enum" && (
                      <Dropdown
                        className=""
                        onSelect={(e) => {
                          bloodRequestDetails[field.name] = e;
                          setBloodRequestDetails({
                            ...bloodRequestDetails,
                          });
                        }}
                      >
                        <Dropdown.Toggle
                          size="sm"
                          className="p-1 w-100 text-dark float-left"
                          variant="outline-muted"
                        >
                          {bloodRequestDetails[field.name] ?? "Select Option"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {field?.options &&
                            field?.options.map((option) => {
                              return (
                                <Dropdown.Item eventKey={option} key={option}>
                                  {option}
                                </Dropdown.Item>
                              );
                            })}
                        </Dropdown.Menu>
                      </Dropdown>
                    )}

                    {(field.type === "text" || field.type === "date") && (
                      <Form.Group className="">
                        <Form.Control
                          type={field.type}
                          placeholder=""
                          className="border-muted"
                          onChange={(e) =>
                            setBloodRequestDetails({
                              ...bloodRequestDetails,
                              [field.name]: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    )}
                  </Col>
                );
              })}
            </Row>
            <Button
              variant="primary mt-4 w-50 float-right"
              onClick={handleSaveDonorDetails}
            >
              Save My Details
            </Button>{" "}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RequestBlood;
