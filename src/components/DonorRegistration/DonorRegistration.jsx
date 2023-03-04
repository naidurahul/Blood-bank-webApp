import axios from "axios";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import {
  Alert,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Image,
  Row,
} from "react-bootstrap";
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
      <h6 className="xxxxlarge text-center text-white  mb-4">
        <Typewriter
          options={{
            strings: ["Register as a Blood Donor", "Save life?"],

            autoStart: true,
            loop: true,
          }}
        />
      </h6>
      <Row noGutters>
        <Col xs={12} md={6} lg={6}>
          <div className="p-2 border rounded mb-2">
            <h6 className="huge text-primary mb-0">
              <span className="xxxxlarge text-white">Why to</span> Donate Blood?
            </h6>{" "}
            <p className="text-muted">
              Blood donation is a selfless act of kindness and compassion
              towards others. It is a voluntary act of giving that embodies the
              values of empathy, altruism, and solidarity. At its core, blood
              donation is a demonstration of our interconnectedness as human
              beings, and a recognition of our shared responsibility to support
              and care for one another. In sum, blood donation is an act of
              selflessness that embodies our shared humanity, and reflects our
              commitment to the ethical principles of reciprocity and
              magnanimity. By donating blood, we can make a tangible and
              positive difference in the lives of others, while also cultivating
              our own moral character and sense of purpose.
            </p>
          </div>
          {/* <div className="p-2 border rounded mb-2">
            <h6 className="xxlarge">
              Here are some blood donation slogans by famous people
            </h6>
            <div className="text-muted">
              <h6 className="mid mt-2 rounded">
                "The blood you donate gives someone another chance at life. One
                day that someone may be a close relative, a friend, a loved
                one—or even you." - Vera Nazarian
              </h6>
              <h6 className="mid mt-1 rounded">
                "The gift of blood is the gift of life." - Peter Diamandis
              </h6>
              <h6 className="mid mt-1 rounded">
                "To give blood you need neither extra strength nor extra food,
                and you will save a life." - Dr. Charles Richard Drew
              </h6>
            </div>
          </div> */}
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Card className="p-2 px-3">
            <h6 className="xxlarge mb-0 text-dark">Donor Registration Form</h6>
            <h6 className="mid text-muted" style={{ fontWeight: 400 }}>
              Please consider donating blood to help save lives and support the
              well-being of others. Your generous act of kindness and compassion
              can make a real and positive difference in the world. Thank you
              for considering this important opportunity to give back to your
              community.
            </h6>
            <Row noGutters className="">
              {donorFormFields.map((field) => {
                return (
                  <Col xs={12} md={6} lg={6} key={field.key} className={`my-2`}>
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
                          className="p-1 w-100 text-dark float-left"
                          variant="outline-muted"
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
                          className="border-muted"
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

export default DonorRegistration;
