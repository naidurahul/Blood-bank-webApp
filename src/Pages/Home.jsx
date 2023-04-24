import React from "react";
import { Alert, Button, Card, Col, Image, Row } from "react-bootstrap";
import HomePhoto from "../assets/Home.png";
import CampHome from "../assets/CampHome.png";
import ManagindBlood from "../assets/managingBlood.jpg";
import SupplyBlood from "../assets/SupplyBlood.jpg";
import RegisterDonor from "../assets/RegisterDonor.jpg";
import RequestBloods from "../assets/RequestBlood.png";
import OrganizeBloodCamp from "../assets/OrganizeBloodCamp.jpg";
import BeAHero from "../assets/BeAHero.png";
import {
  ArrowRight,
  ArrowRightCircle,
  ArrowUpRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
                    <h6 className="xxxxlarge mb-0  text-primary">
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
                        variant="outline-primary d-flex border-dark"
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
                    className="d-flex  w-100 home-text flex-column"
                  >
                    <h6 className="xxxxlarge mb-1  text-primary">
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
                        variant="outline-primary d-flex border-dark"
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
                    <h6 className="xxxxlarge mb-0  text-primary">
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
                        variant="outline-primary d-flex border-dark"
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
                <hr className="my-0" />
                <h6 className="my-2 xxxlarge ">Managing Blood Stocks</h6>
                <p>
                  Managing blood stocks involves keeping track of the available
                  blood inventory,quantity.
                </p>
              </div>
            </Col>{" "}
            <Col xs={12} md={4} lg={3} className="my-2">
              <div className="p-1">
                <Image src={OrganizeBloodCamp} width={250} height={200} />
                <hr className="my-0" />
                <h6 className="my-2 xxxlarge ">Organizing Blood Camps</h6>
                <p>
                  Organizing blood camps involves planning, coordinating, and
                  executing events to encourage blood donation.
                </p>
              </div>
            </Col>{" "}
            <Col xs={12} md={4} lg={3} className="my-2">
              <div className="p-1">
                <Image src={SupplyBlood} width={250} />
                <hr className="mt-1 mb-0" />
                <h6 className="my-2 xxxlarge ">Maintain Blood Supply</h6>
                <p>
                  Maintaining blood supply involves ensuring a steady and
                  adequate supply of blood products to meet the needs of
                  patients.
                </p>
              </div>
            </Col>{" "}
            <Col xs={12} md={4} lg={3} className="my-2">
              <div className="p-1">
                <Image src={RegisterDonor} width={250} />
                <hr className="my-0" />
                <h6 className="my-2 xxxlarge ">Registering Blood Donors</h6>
                <p>
                  Registering blood donors involves collecting and recording
                  important information about Donors.
                </p>
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
                <h6 className="xxxxlarge">21</h6>
                <h6 className="xlarge mb-0">Event Organized</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert
                variant="green"
                className="px-2 text-dark text-center py-2"
              >
                <h6 className="xxxxlarge">322</h6>
                <h6 className="xlarge mb-0">Blood Collected</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert
                variant="green"
                className="px-2 text-dark text-center py-2"
              >
                <h6 className="xxxxlarge">17</h6>
                <h6 className="xlarge mb-0">Total Donor</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert
                variant="green"
                className="px-2 text-dark text-center py-2"
              >
                <h6 className="xxxxlarge">872</h6>
                <h6 className="xlarge mb-0">Blood Searched</h6>
              </Alert>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
