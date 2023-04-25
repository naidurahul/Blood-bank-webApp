import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Image, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import CampHome from "../assets/CampHome.png";
import HomePhoto from "../assets/Home.png";
import OrganizeBloodCamp from "../assets/OrganizeBloodCamp.jpg";
import RegisterDonor from "../assets/RegisterDonor.jpg";
import RequestBloods from "../assets/RequestBlood.png";
import SupplyBlood from "../assets/SupplyBlood.jpg";
import ManagindBlood from "../assets/managingBlood.jpg";
import axios from "axios";

const Home = () => {
  const [bloodCamps, setBloodCamps] = useState();
  const [bloodStocks, setBloodStocks] = useState();
  const [donors, setDonors] = useState();
  const [requester, setRequester] = useState();
  const navigate = useNavigate();

  console.log(bloodCamps, bloodStocks, donors, requester);
  const findBloodCollected = (stock) => {
    const totalStock = stock?.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.stock);
    }, 0);
    return totalStock;
  };
  const fetchBloodCamps = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blood-camp"
      );
      setBloodCamps(data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchDonor = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/all/donations"
      );
      setDonors(data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchBloodRequester = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blood-request"
      );
      setRequester(data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchBloodStock = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/stock");
      setBloodStocks(data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchDonor();
    fetchBloodRequester();
    fetchBloodCamps();
    fetchBloodStock();
  }, []);

  return (
    <>
      <div className="mt-4">
        <div className="mx-2">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div
                style={{ height: "100%" }}
                className="d-flex py-2 flex-column justify-content-center align-items-center"
              >
                <Alert variant="green" className="w-100">
                  <div
                    style={{ height: "100%" }}
                    className="d-flex  w-100 home-text flex-column"
                  >
                    <h6 className="xxxxlarge mb-0 text-dark">
                      Get Emergency Blood Requests Fulfilled with ERakta Nepal{" "}
                    </h6>
                    <p>
                      If you require blood in an emergency, ERakta Nepal is here
                      to help. Simply fill out the form on our platform to
                      request the blood you need. Our network of donors is ready
                      to assist in providing life-saving transfusions, making it
                      easy and convenient to access the blood you need during
                      critical situations.
                    </p>
                    <div className="d-flex">
                      <Button
                        variant="outline-green d-flex"
                        onClick={() =>
                          navigate(`/request-blood`, { replace: true })
                        }
                      >
                        Request Blood <ArrowRight className="mt-1 ml-2" />
                      </Button>{" "}
                    </div>
                  </div>
                </Alert>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Image
                src={HomePhoto}
                style={{ marginTop: "-60px" }}
                width={800}
              />
            </Col>
          </Row>
        </div>
        <div className="mx-2 my-2 py-1">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Image
                src={CampHome}
                style={{ marginTop: "-60px" }}
                width={800}
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div
                style={{ height: "100%" }}
                className="d-flex py-2 flex-column justify-content-center align-items-center"
              >
                <Alert variant="green" className="w-100">
                  <div
                    style={{ height: "100%" }}
                    className="d-flex  w-100  flex-column"
                  >
                    <h6 className="xxxxlarge mb-1 text-dark">
                      Donate Blood and Save Lives at Live Camps with ERakta
                      Nepal{" "}
                    </h6>
                    <p>
                      Discover live blood donation camps happening throughout
                      Nepal on ERakta Nepal. Participate in these events to
                      support humanity and donate blood to those in need. By
                      attending these blood donation camps, you can make a
                      significant impact on the lives of others and help save
                      lives in your community."
                    </p>
                    <div className="d-flex">
                      <Button
                        variant="outline-green d-flex"
                        onClick={() =>
                          navigate(`/live-blood-camp`, { replace: true })
                        }
                      >
                        Find Blood Camps <ArrowRight className="mt-1 ml-2" />
                      </Button>{" "}
                    </div>
                  </div>
                </Alert>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mx-2 my-2">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div
                style={{ height: "100%" }}
                className="d-flex py-2 flex-column justify-content-center align-items-center"
              >
                <Alert variant="green" className="w-100">
                  <div
                    style={{ height: "100%" }}
                    className="d-flex  w-100 home-text flex-column"
                  >
                    <h6 className="xxxxlarge mb-0 text-dark">
                      Join ERakta Nepal's Blood Donor Network Today{" "}
                    </h6>
                    <p>
                      Join ERakta Nepal's network of blood donors by registering
                      yourself as a donor. Your registration will enable people
                      in emergency situations to easily access blood donations
                      and receive life-saving transfusions. Don't wait any
                      longer - register now to become a blood donor and make a
                      meaningful impact on someone's life.
                    </p>
                    <div className="d-flex">
                      <Button
                        variant="outline-green d-flex"
                        onClick={() =>
                          navigate(`/donor-registration`, { replace: true })
                        }
                      >
                        Donate Blood <ArrowRight className="mt-1 ml-2" />
                      </Button>{" "}
                    </div>
                  </div>
                </Alert>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Image
                src={RequestBloods}
                style={{ marginTop: "-60px" }}
                width={800}
              />
            </Col>
          </Row>
        </div>
        <div className="mx-4 my-2">
          <h6 className="larger my-5 text-center">What do we do?</h6>
          <Row>
            <Col xs={12} md={4} lg={3} className="my-2">
              <div className="p-1">
                <Image src={ManagindBlood} width={250} />
                <Alert variant="green" className="w-100 my-3 p-2">
                  <h6 className="mb-2 xxxlarge ">Managing Blood Stocks</h6>
                  <p className="text-greem">
                    Managing blood stocks involves keeping track of the
                    available blood inventory,quantity.
                  </p>
                </Alert>
              </div>
            </Col>{" "}
            <Col xs={12} md={4} lg={3} className="my-2">
              <div className="p-1">
                <Image src={OrganizeBloodCamp} width={250} height={200} />
                <Alert variant="green" className="w-100 my-3 p-2">
                  <h6 className="mb-2 xxxlarge ">Organizing Blood Camps</h6>
                  <p>
                    Organizing blood camps involves planning, coordinating, and
                    executing events to encourage blood donation.
                  </p>
                </Alert>
              </div>
            </Col>{" "}
            <Col xs={12} md={4} lg={3} className="my-2">
              <div className="p-1">
                <Image src={SupplyBlood} width={250} />
                <Alert variant="green" className="w-100 my-4 p-2">
                  <h6 className="mb-2 xxxlarge ">Maintain Blood Supply</h6>
                  <p>
                    Maintaining blood supply involves ensuring a steady and full
                    supply of blood to meet the needs of patients.
                  </p>
                </Alert>
              </div>
            </Col>{" "}
            <Col xs={12} md={4} lg={3} className="my-2">
              <div className="p-1">
                <Image src={RegisterDonor} width={250} />
                <Alert variant="green" className="w-100 my-4 p-2">
                  <h6 className="mb-2 xxxlarge ">Registering Blood Donors</h6>
                  <p>
                    Registering blood donors involves collecting and recording
                    important information about Donors.
                  </p>
                </Alert>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mx-4mb-5  mt-5">
          {" "}
          <h6 className="larger my-5 text-center">Our Contribution</h6>
          <Row className="mx-2 d-flex justify-content-center ">
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert
                variant="green"
                className="px-2 text-dark text-center py-2"
              >
                <h6 className="xxxxlarge">{bloodCamps?.length ?? 0} </h6>
                <h6 className="xlarge mb-0">Event Organized</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert
                variant="green"
                className="px-2 text-dark text-center py-2"
              >
                <h6 className="xxxxlarge">
                  {" "}
                  {findBloodCollected(bloodStocks)}
                </h6>
                <h6 className="xlarge mb-0">Blood Collected</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert
                variant="green"
                className="px-2 text-dark text-center py-2"
              >
                <h6 className="xxxxlarge">{donors?.length}</h6>
                <h6 className="xlarge mb-0">Total Donor</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert
                variant="green"
                className="px-2 text-dark text-center py-2"
              >
                <h6 className="xxxxlarge">
                  {requester?.filter((x) => x.status === "accepted")?.length}
                </h6>
                <h6 className="xlarge mb-0">Request Served</h6>
              </Alert>
            </Col>
          </Row>
        </div>{" "}
        <div className="mx-2 my-5">
          <Row>
            {" "}
            <Col xs={12} md={6} lg={6}>
              <Image
                src={RequestBloods}
                style={{ marginTop: "-30px" }}
                width={800}
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div
                style={{ height: "100%" }}
                className="d-flex py-2 flex-column justify-content-center align-items-center"
              >
                <Alert variant="green" className="w-100">
                  <div
                    style={{ height: "100%" }}
                    className="d-flex  w-100 home-text flex-column"
                  >
                    <h6 className="xxxxlarge mb-0 text-dark">
                      Love to hear from you, Get in touch{" "}
                    </h6>
                    <p>
                      We would greatly appreciate it if you could provide your
                      feedback to ERakta Nepal. Your valuable insights will help
                      us learn and improve our services. We are constantly
                      striving to enhance our offerings, and your feedback will
                      play an instrumental role in achieving that goal. Thank
                      you for taking the time to share your thoughts with us.
                    </p>
                    <div className="d-flex">
                      <Button
                        variant="outline-green d-flex"
                        onClick={() =>
                          navigate(`/give-feedback`, { replace: true })
                        }
                      >
                        Give Feedback <ArrowRight className="mt-1 ml-2" />
                      </Button>{" "}
                    </div>
                  </div>
                </Alert>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
