import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { donorFormFields } from "../../global/constants";

const DonorRegistration = () => {
  const [donorDetails, setDonorDetails] = useState({});
  console.log(donorDetails, "donorDetails");

  const saveDonorDetails = async (details) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/donation`,
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
    if (!donorDetails.name) {
      return toast.error("Donor Name is Required");
    }
    saveDonorDetails(donorDetails);
  };

  return (
    <>
      <Row noGutters>
        <Col xs={12} md={6} lg={6}>
          <Row noGutters>
            <Col xs={6}>
              <Card className="text-center">
                <Card.Header>Donor</Card.Header>
                <Card.Body>67</Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
              <Card className="text-center">
                <Card.Header>Helped</Card.Header> <Card.Body>67</Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Card className="p-2 px-3">
            <h6 className="text-center xxxlarge">Blood Donation Form</h6>
            <Row noGutters className="">
              {donorFormFields.map((field) => {
                return (
                  <Col xs={12} md={6} lg={6} key={field.key} className={`my-2`}>
                    <h6 className="mid-font text-primary mb-1">
                      {field.label}{" "}
                    </h6>
                    {field.type === "enum" && (
                      <Dropdown
                        className="mb-3"
                        onSelect={(e) => {
                          donorDetails[field.name] = e;
                          setDonorDetails({
                            ...donorDetails,
                          });
                        }}
                      >
                        <Dropdown.Toggle
                          size="sm"
                          className="p-1 w-100 float-left"
                          variant="outline-primary-light"
                        >
                          {donorDetails[field.name] ?? "Select Option"}
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
                      <Form.Group className="mb-3">
                        <Form.Control
                          type={field.type}
                          placeholder=""
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
              variant="primary mt-2 w-50 text-right"
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

export default DonorRegistration;
