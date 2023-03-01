import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { donorFields } from "../../common/constants";

const DonorRegistrationDetails = () => {
  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const { pathname } = useLocation();

  const handelDeleteDonor = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/${
          pathname === "/live-blood-camp" ? "hospitals" : "donations"
        }/${id}`
      );
      console.log(data);
      setShow(true);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/all/donations"
        );
        console.log(data.msg);
        setDonor(data.msg);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [refresh]);
  return (
    <>
      {show && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Successfully Deleted</strong> .
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          />
        </div>
      )}

      {donor.length === 0 ? (
        <h1 style={{ textAlign: "center", fontSize: "24px" }}>No data</h1>
      ) : (
        <>
          {loading ? (
            <>
              <div
                className="spinner-border mx-auto my-3"
                role="status"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <h2 className="text-sm font-bold text-red-600 mt-1 text-center">
                Loading...
              </h2>
            </>
          ) : (
            <>
              <div className="p-2">
                <div>
                  <Form>
                    <Form.Control placeholder="Search donor by name here.."></Form.Control>
                  </Form>
                </div>
                <div className="my-4 text-center">
                  <Alert className="p-3 w-25" variant="danger">
                    56 Donor
                  </Alert>
                </div>
                {donor
                  ? donor.map((value, index) => {
                      return (
                        <>
                          <Card className="my-2">
                            <Card.Header className="text-right">
                              {" "}
                              <Button size="sm" variant="success mr-2">
                                Edit
                              </Button>
                              <Button
                                // onClick={() => handelDeleteDonor(value._id)}
                                size="sm"
                                variant="danger"
                              >
                                Delete
                              </Button>
                            </Card.Header>
                            <Card.Body className="d-flex p-1">
                              <div
                                style={{ minWidth: 120, maxWidth: 120 }}
                                className=""
                              >
                                <div className="text-center">
                                  <PersonCircle size={70} className="ml-5" />
                                  <h6 className="mb-0 mt-2 font-weight-bold xxlarge">
                                    {value.name}
                                  </h6>
                                  <h6
                                    className="mb-0  xlarge"
                                    style={{ color: "#ad2a2a" }}
                                  >
                                    {value.address}
                                  </h6>
                                  <h6 className="  mb-0 large">
                                    {value.gender}
                                  </h6>
                                </div>
                              </div>

                              <div>
                                <Row noGutters className="">
                                  {donorFields.map((field) => {
                                    return (
                                      <Col
                                        xs={12}
                                        md={4}
                                        lg={3}
                                        key={field.key}
                                        className={`mt-0`}
                                      >
                                        <p className="mb-0 text-dark">
                                          <span className="text-muted xlarge">
                                            {field.label}:{" "}
                                          </span>
                                        </p>
                                        <p
                                          className="mb-0  text-dark px-2 py-1 mid rounded"
                                          style={{ backgroundColor: "#f5c6c6" }}
                                        >
                                          {value[field.name] ?? "N/A"}
                                        </p>
                                      </Col>
                                    );
                                  })}
                                </Row>
                              </div>
                            </Card.Body>
                          </Card>
                        </>
                      );
                    })
                  : null}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DonorRegistrationDetails;
