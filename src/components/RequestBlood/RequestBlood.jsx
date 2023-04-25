import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Dropdown, Form, Image, Row } from "react-bootstrap";
import { ArrowRight, Search } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import RequestBloods from "../../assets/RequestBlood.png";
import { bloodRequestFields } from "../../global/constants";

const RequestBlood = () => {
  const [bloodRequestDetails, setBloodRequestDetails] = useState(null);

  const saveDonorDetails = async (details) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/blood-request`,
        { ...details }
      );
      if (data.status) {
        toast.success("Succesfully Requested Blood");
        setBloodRequestDetails(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onRequestClick = () => {
    const emptyFields = bloodRequestFields?.find(
      (x) => !bloodRequestDetails?.[x.name]
    );
    console.log(emptyFields);
    if (emptyFields) {
      return toast.error(`${emptyFields.label} is Required`);
    }
    saveDonorDetails(bloodRequestDetails);
  };
  return (
    <>
      <Row noGutters>
        <Col xs={12} md={6} lg={6}>
          <Image src={RequestBloods} width={700} />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="p-2 px-3">
            <h6 className="huge mb-0 text-dark">
              Request Blood,
              <h6 className="huge mb-0 text-dark d-flex">
                Find your Life Saver
                <Search className="ml-2 mt-1 text-primary" />
              </h6>
            </h6>{" "}
            <Row noGutters className="">
              {bloodRequestFields.map((field) => {
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
                        onSelect={(e) =>
                          setBloodRequestDetails({
                            ...bloodRequestDetails,
                            [field.name]: e,
                          })
                        }
                      >
                        <Dropdown.Toggle
                          size="sm"
                          className="p-1 w-100 text-dark float-left"
                          variant="outline-secondary"
                          style={{ height: 40, borderRadius: 8 }}
                        >
                          {bloodRequestDetails?.[field.name] ??
                            "Select Blood Group"}
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
                          value={bloodRequestDetails?.[field.name] ?? ""}
                          placeholder=""
                          className=""
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
              variant="outline-green mt-3 d-flex"
              onClick={onRequestClick}
            >
              Request <ArrowRight className="mt-1 ml-2" />
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RequestBlood;
