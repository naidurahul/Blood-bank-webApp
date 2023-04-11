import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BuildingFill, Buildings, Hospital } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";

const LiveBloodCamp = () => {
  const [bloodCamps, setBloodCamps] = useState([]);
  const [fetchingDate, setFetchingData] = useState(false);
  const fetchData = async () => {
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
    fetchData();
  }, []);
  return (
    <>
      <h6 className="xxxxlarge text-center text-dark  mb-4">
        <Typewriter
          options={{
            strings: ["Searching Blood Camps?", "Save life?"],

            autoStart: true,
            loop: true,
          }}
        />
      </h6>
      <div>
        <Row>
          {bloodCamps?.map((camp, index) => {
            return (
              <Col xs={12} md={6} lg={6}>
                <Card className="text-dark ">
                  <Card.Header className="d-flex font-normal xxxlarge">
                    <Hospital className="mr-2" /> Camp {index + 1}
                  </Card.Header>
                  <Card.Body>
                    <h6 className="xxlarge">{camp.cName} </h6>
                    <p>{camp?.description}</p>
                    <h6 className="xxlarge">
                      Starting Date:
                      <span className="xlarge text-muted">
                        {moment(camp.sDate).format("MMM Do YYYY")}
                      </span>
                    </h6>{" "}
                    <h6 className="xxlarge">
                      Location:
                      <span className="xlarge text-muted">{camp?.address}</span>
                    </h6>
                    <h6 className="xxlarge">
                      Starts At:
                      <span className="xlarge text-muted">
                        {moment(camp.sDate).format("HH:mm a")}
                      </span>
                    </h6>
                    <h6 className="xxlarge">
                      Ends At:
                      <span className="xlarge text-muted">
                        {moment(camp.eDate).format("HH:mm a")}
                      </span>
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default LiveBloodCamp;
