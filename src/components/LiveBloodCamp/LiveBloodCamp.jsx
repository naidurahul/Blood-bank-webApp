import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import {
  ArrowRight,
  BuildingFill,
  Buildings,
  ChatDotsFill,
  DatabaseX,
  Hospital,
  PeopleFill,
  PersonCheckFill,
  Search,
} from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import Participant from "./Participant";
import { addOrUpdateItemInArray } from "../../global/constants";
import { toast } from "react-toastify";
import Loader from "../../common/Loader";

const LiveBloodCamp = () => {
  const [bloodCamps, setBloodCamps] = useState([]);
  const [openParticipantModal, setOpenParticipantModal] = useState(null);
  const [fetchingDate, setFetchingData] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQUery] = useState("");

  const onFormSubmit = (data) => {
    if (data) {
      editBloodCamp(data.data);
    }
  };

  const editBloodCamp = async (details) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/blood-camp`,
        { ...details }
      );
      if (data.status) {
        console.log(data.msg);
        setBloodCamps([...addOrUpdateItemInArray(bloodCamps, data.msg)]);
        toast.success("Details Sent Succesfully!");
        setOpenParticipantModal(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchingLiveBloodCamps = async () => {
    try {
      setFetchingData(true);
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blood-camp"
      );
      setBloodCamps(data.msg);
      setFetchingData(false);
    } catch (error) {
      console.log(error.message);
      setFetchingData(false);
    }
  };
  useEffect(() => {
    fetchingLiveBloodCamps();
  }, []);
  const filterRule = (camp) => {
    console.log();
    return (
      camp.cName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      camp.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      camp.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  useEffect(() => {
    const filteredValue =
      searchQuery !== ""
        ? bloodCamps.filter((camp) => filterRule(camp))
        : [...bloodCamps];
    console.log(filteredValue, bloodCamps, searchQuery);
    setFilteredList(filteredValue);
  }, [searchQuery, bloodCamps]);
  return (
    <>
      <div style={{ height: fetchingDate ? "80vh" : "auto" }}>
        <h6 className="huge mb-0 text-dark mt-3 ">
          Make a Difference Today,
          <h6 className="xxxxlarge mb-0 text-dark d-flex ">
            Find Blood Donation Camps in Nepal and Save Lives
            <Search size={40} className="ml-2 mt-1 text-primary" />
          </h6>
        </h6>
        <div className="d-flex my-3 flex-row-reverse">
          <div className="w-100 d-flex flex-row-reverse">
            <Form className="my-1 w-50">
              <Form.Control
                placeholder="Search camps by location.."
                value={searchQuery}
                onChange={(e) => setSearchQUery(e.target.value)}
              ></Form.Control>
            </Form>
          </div>
        </div>
        {fetchingDate ? (
          <Loader />
        ) : (
          <div>
            <Row>
              {!filteredList?.length ? (
                <h6 className="mt-5 w-100 d-flex xxxlarge justify-content-center">
                  <DatabaseX
                    size={50}
                    className="mr-3"
                    style={{ marginTop: "-20px" }}
                  />{" "}
                  No Data to Show!
                </h6>
              ) : (
                filteredList?.map((camp, index) => {
                  return (
                    <Col xs={12} md={6} lg={6}>
                      <Card className="blood-camp-card my-2">
                        <Card.Body className="d-flex justify-content-between">
                          <div>
                            <Card.Title className="blood-camp-card-title d-flex justify-content-between">
                              {camp.cName}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {camp?.address}{" "}
                            </Card.Subtitle>
                            <Card.Text className="blood-camp-card-details tiny">
                              <div>
                                <strong>Date:</strong>{" "}
                                {moment(camp.sDate).format("MMM Do YYYY")}
                                <br />
                                <strong>Time:</strong>{" "}
                                {moment(camp.sTime, "HH:mm").format("HH:mm a")}
                                <br />
                                {camp?.description}
                              </div>
                            </Card.Text>
                            <Button
                              variant="outline-green d-flex border-dark"
                              onClick={() => setOpenParticipantModal(camp)}
                            >
                              Participate <ArrowRight className="mt-1 ml-2" />
                            </Button>{" "}
                          </div>{" "}
                          <Alert
                            variant="green"
                            className="d-flex px-1 pt-1 pb-0"
                            style={{ height: 60 }}
                          >
                            <PersonCheckFill size={40} className="mr-2" />{" "}
                            <div>
                              <h6 className="xxlarge mb-0">Participant</h6>
                              <h6 className="xxxlarge mb-0 text-center mr-3">
                                {camp?.donorRegistered?.length}
                              </h6>
                            </div>
                          </Alert>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              )}
            </Row>
          </div>
        )}
      </div>
      <Participant
        openParticipantModal={openParticipantModal}
        handleClose={() => setOpenParticipantModal(null)}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
};

export default LiveBloodCamp;
