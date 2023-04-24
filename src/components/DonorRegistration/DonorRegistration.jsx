import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Dropdown, Form, Image, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import RegisterAsDonor from "../../assets/RegisterAsDonor.png";
import { donorFormFields } from "../../global/constants";
import {
  ArrowRight,
  BalloonHeartFill,
  HeartPulseFill,
  Search,
} from "react-bootstrap-icons";

const DonorRegistration = () => {
  const [donorDetails, setDonorDetails] = useState({});

  const saveDonorDetails = async (details) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/donation`,
        { ...details }
      );
      if (data.status === "Success") {
        toast.success("Succesfully Registered");
        setDonorDetails({});
      }
      if (data.msg === "Donor Exists") {
        toast.error("Donor Already Exists in our System!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSaveDonorDetails = () => {
    const emptyFields = donorFormFields.find(
      (x) => !donorDetails[x.name] && x.required
    );
    if (emptyFields) {
      return toast.error(`${emptyFields.label} is Required`);
    }
    saveDonorDetails(donorDetails);
  };

  return (
    <>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Image src={RegisterAsDonor} width={700} />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="p-2 px-3">
            <h6 className="huge mb-0 text-dark">
              Donate Blood,
              <h6 className="huge mb-0 text-dark d-flex">
                Be a Life Saver
                <BalloonHeartFill className="ml-2 mt-1 text-info" />
              </h6>
            </h6>{" "}
            <Row className="">
              {donorFormFields.map((field) => {
                return (
                  <Col
                    xs={12}
                    md={6}
                    lg={6}
                    key={field.name}
                    className={`my-0`}
                  >
                    <Form.Label className="text-dark mb-0">
                      {field.label}
                    </Form.Label>
                    {field.type === "enum" && (
                      <Dropdown
                        className=""
                        onSelect={(e) => {
                          donorDetails[field.name] = e;
                          setDonorDetails({
                            ...donorDetails,
                          });
                        }}
                      >
                        <Dropdown.Toggle
                          size="sm"
                          className="p-1 w-100 text-dark float-left"
                          variant="outline-secondary"
                          style={{ height: 40, borderRadius: 8 }}
                        >
                          {donorDetails[field.name] ?? "Choose One"}
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
                          value={donorDetails[field.name] ?? ""}
                          className=""
                          onChange={(e) =>
                            setDonorDetails({
                              ...donorDetails,
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
              variant="outline-green mt-3 d-flex"
              onClick={handleSaveDonorDetails}
            >
              Register <ArrowRight className="mt-1 ml-2" />
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DonorRegistration;
