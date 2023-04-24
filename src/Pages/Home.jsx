import React from "react";
import { Alert, Button, Card, Col, Image, Row } from "react-bootstrap";
import HomePhoto from "../assets/Home.png";
import CampHome from "../assets/CampHome.png";
import ManagindBlood from "../assets/managingBlood.jpg";
import SupplyBlood from "../assets/SupplyBlood.jpg";
import RegisterDonor from "../assets/RegisterDonor.jpg";
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
        <div className="mx-2 my-2">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div
                style={{ height: "100%" }}
                className="d-flex py-2 home-text text-center  flex-column justify-content-center align-items-center"
              >
                <h6 className="huge  text-primary">Effective blood supply</h6>
                <Alert className="w-75">
                  Say goodbye to manual processes and hello to streamlined
                  operations that ensure quick and efficient delivery of blood
                  products to those in need
                </Alert>
                <div className="p-2 d-flex ">
                  <Button
                    variant="outline-primary d-flex border-dark mx-2"
                    onClick={() =>
                      navigate(`/donor-registration`, { replace: true })
                    }
                  >
                    Donate Blood
                    <ArrowRight className="mt-1 ml-2" />
                  </Button>{" "}
                  <Button
                    variant="outline-primary d-flex border-dark mx-2"
                    onClick={() =>
                      navigate(`/request-blood`, { replace: true })
                    }
                  >
                    Request Blood <ArrowRight className="mt-1 ml-2" />
                  </Button>{" "}
                </div>
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
              <Alert className="px-2 text-dark text-center py-2">
                <h6 className="xxxxlarge">21</h6>
                <h6 className="xlarge mb-0">Event Organized</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert className="px-2 text-dark text-center py-2">
                <h6 className="xxxxlarge">322</h6>
                <h6 className="xlarge mb-0">Blood Collected</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert className="px-2 text-dark text-center py-2">
                <h6 className="xxxxlarge">17</h6>
                <h6 className="xlarge mb-0">Total Donor</h6>
              </Alert>
            </Col>
            <Col xs={12} md={4} lg={2} className="my-2">
              <Alert className="px-2 text-dark text-center py-2">
                <h6 className="xxxxlarge">872</h6>
                <h6 className="xlarge mb-0">Blood Searched</h6>
              </Alert>
            </Col>
          </Row>
        </div>
        <div className="mx-2 my-4 py-5">
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
                className="d-flex py-2 home-text text-center  flex-column justify-content-center align-items-center"
              >
                <h6 className="huge  text-primary">
                  Get Involve in Blood Donation
                </h6>
                <Alert className="w-75">
                  We Organize blood donation campaign every week , you can get
                  enrolled in it
                </Alert>
                <div className="p-2 d-flex  ">
                  <Button
                    variant="outline-primary d-flex border-dark mx-2"
                    onClick={() =>
                      navigate(`/live-blood-camp`, { replace: true })
                    }
                  >
                    See Camps <ArrowRight className="mt-1 ml-2" />
                  </Button>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mx-4 mb-4">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Image src={BeAHero} width={800} />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div
                style={{ height: "100%" }}
                className="d-flex py-2 w-100 home-text flex-column"
              >
                <h6 className="huge mb-0  text-primary">
                  Save a life, donate blood{" "}
                </h6>
                <h6 className="xxxlarge mb-0">Why to donate blood?</h6>
                <h6 className="mb-0 d-flex">
                  <ArrowRightCircle className="mr-1" /> Saving lives
                </h6>
                <h6 className="mb-0 d-flex">
                  {" "}
                  <ArrowRightCircle className="mr-1" />
                  Reducing the risk of heart disease
                </h6>
                <h6 className="mb-0 d-flex">
                  {" "}
                  <ArrowRightCircle className="mr-1" />
                  Improving blood flow
                </h6>
                <h6 className="mb-0 d-flex">
                  {" "}
                  <ArrowRightCircle className="mr-1" />
                  Promoting community health
                </h6>
                <h6 className="mb-0 d-flex">
                  {" "}
                  <ArrowRightCircle className="mr-1" />
                  Screening for medical conditions
                </h6>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
