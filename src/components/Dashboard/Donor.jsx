import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, ProgressBar, Row } from "react-bootstrap";
import { PeopleFill, PersonCircle } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { donorFields } from "../../common/constants";
import HeaderWithUnderline from "../../common/HeaderWithUnderLine";

const DonorRegistrationDetails = () => {
  const [donorList, setDonorList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQUery] = useState("");
  const [fetchingDonors, setFetchingDonors] = useState(false);
  const [show, setShow] = useState(false);
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
      fetchData();
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const fetchData = async () => {
    try {
      setFetchingDonors(true);
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/all/donations"
      );
      console.log(data.msg);
      setDonorList(data.msg);
      setFilteredList(data.msg);
      setFetchingDonors(false);
    } catch (error) {
      console.log(error.message);
      setFetchingDonors(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filteredValue =
      searchQuery !== ""
        ? donorList.filter((donor) =>
            donor.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [...donorList];
    setFilteredList([...filteredValue]);
  }, [searchQuery]);
  console.log(donorList, filteredList, searchQuery, "filteredList");
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

      <div className="pl-2">
        <Row noGutters>
          <Col xs={12} md={8} lg={8}>
            <div>
              <Form>
                <Form.Control
                  placeholder="Search donor by name here.."
                  value={searchQuery}
                  onChange={(e) => setSearchQUery(e.target.value)}
                ></Form.Control>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      {filteredList.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "24px", marginTop: 100 }}>
          <div>No Donors to Show!</div>
        </div>
      ) : (
        <>
          {fetchingDonors ? (
            <>
              <ProgressBar />
            </>
          ) : (
            <>
              <div className="px-2">
                {filteredList
                  ? filteredList.map((value, index) => {
                      return (
                        <>
                          <Card className="my-3">
                            <Card.Header className="text-right ">
                              {" "}
                              <Button
                                onClick={() => handelDeleteDonor(value._id)}
                                size="sm"
                                variant="danger mr-2"
                              >
                                Delete
                              </Button>
                              <Button size="sm" variant="success ">
                                Edit
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
