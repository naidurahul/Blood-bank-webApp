import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";
import {
  bloodRequestFields,
  otherPlaceForBloodDonation,
} from "../../global/constants";
import RequestBloods from "../../assets/requestBlood.jpg";

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
          <Image src={RequestBloods} width={500} />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="p-2 px-3">
            <h6 className="xxlarge mb-0 text-dark">Blood Request Form</h6>
            
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
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RequestBlood;
