import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Edit from "./Edit";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import BloodRequestForm from "../../Pages/BloodRequestForm/BloodRequestForm";
import { PersonCircle } from "react-bootstrap-icons";
import {
  addOrUpdateItemInArray,
  bloodRequestFields,
} from "../../common/constants";
import { toast } from "react-toastify";
import Loader from "../../common/Loader";

const Request = () => {
  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleEdit = async (value) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/blood-request`,
        { ...value }
      );
      if (data.status) {
        toast.success(
          value?.status === "approve"
            ? "Request Approved Successfully!"
            : "Request Rejected Succesfully!"
        );
        setDonor([...addOrUpdateItemInArray(donor, value, "_id")]);
        console.log(data, value, donor, "donor");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/request"
        );
        setDonor(data.msg);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pl-2">
        <Row noGutters>
          <Col xs={12} md={8} lg={8}>
            <div>
              <Form>
                <Form.Control
                  placeholder="Search requester by name here.."
                  // value={searchQuery}
                  // onChange={(e) => setSearchQUery(e.target.value)}
                ></Form.Control>
              </Form>
            </div>
          </Col>{" "}
          <Col xs={12} md={2} lg={2}>
            <Button size="sm" variant="dark mt-1 w-100 ml-1 m-1">
              Filter
            </Button>
          </Col>{" "}
          <Col xs={12} md={2} lg={2}>
            <Button size="sm" variant="dark mt-1 w-100 ml-1">
              Sort
            </Button>
          </Col>
        </Row>
      </div>
      {loading ? (
        <>
          <div className="px-2">
            <Loader />
          </div>
        </>
      ) : donor?.length === 0 ? (
        <>
          <div
            style={{
              textAlign: "center",
              fontSize: "24px",
              marginTop: 100,
            }}
          >
            <h6 className="xlarge">No Any Blood Request to Show!</h6>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="px-2">
            {donor
              ? donor.map((value, index) => {
                  return (
                    <>
                      <Card className="my-3">
                        <Card.Header className="d-flex justify-content-between ">
                          <div>
                            <div>
                              <span>Blood Group:</span>
                              <span
                                className="rounded  text-white ml-1 px-1 bg-primary"
                              >
                                {" "}
                                {value.bloodGroup}
                              </span>
                              <span className="ml-4">Status:</span>
                              {value?.status === "accepted" && (
                                <Button
                                  size="sm"
                                  disabled
                                  variant="green text-white ml-1"
                                >
                                  {value?.status?.toUpperCase()}
                                </Button>
                              )}{" "}
                              {value?.status === "pending" && (
                                <Button
                                  size="sm"
                                  disabled
                                  variant="yellow text-white ml-1"
                                >
                                  {value?.status?.toUpperCase()}
                                </Button>
                              )}{" "}
                              {value?.status === "rejected" && (
                                <Button
                                  size="sm"
                                  disabled
                                  variant="primary ml-1"
                                >
                                  {value?.status?.toUpperCase()}
                                </Button>
                              )}
                            </div>
                          </div>
                          <div>
                            {value?.status === "pending" ||
                            value?.status === "rejected" ? (
                              <Button
                                size="sm"
                                variant="green mr-2"
                                onClick={() =>
                                  handleEdit({ ...value, status: "accepted" })
                                }
                              >
                                Accept Request
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="primary"
                                onClick={() =>
                                  handleEdit({ ...value, status: "rejected" })
                                }
                              >
                                Reject Request
                              </Button>
                            )}
                          </div>
                        </Card.Header>
                        <Card.Body className="p-1 py-2">
                          <Row noGutters className="px-2">
                            {bloodRequestFields.map((field) => {
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
  );
};

export default Request;
