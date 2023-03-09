import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import BloodDonationProgram from "../assets/BloodDonationProgram.jpg";
import { ourTeam } from "../global/constants";

const Home = () => {
  return (
    <>
      <div className="mt-2 ">
        <Row>
          <Col xs={12} md={6} lg={6} className="my-2">
            <div className="p-2  border rounded">
              <h6 className="huge text-primary">
                <span className="xxxxlarge text-white">Who is</span> ERAKTA
                NEPAL?
              </h6>
              <p className="text-muted">
                Existing blood management system in Nepal is manual, cumbersome
                and inefficient. Most blood banks record the information on
                blood collection/supply manually in registers. Maintaining blood
                stock inventory is tedious with laborious back-office paperwork
                and managing information on availability and shortage of blood
                is a tall task. A social initiative for a smart, transparent and
                holistic blood management service from collection to supply.
                When it comes to blood, right information at the right time can
                be the answer to a life and death situation.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} md={6} lg={6} className="my-2">
            <div className="p-2 d-flex flex-column align-items-center justify-content-center h-100 ">
              <Button variant="outline-primary text-white border-white  w-50 ">
                Donate Blood
              </Button>{" "}
              <Button variant="outline-primary text-white border-white mt-2  w-50 ">
                Request Blood
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-3">
        <div className="p-2  border rounded">
          <h6 className="huge text-primary">
            <span className="xxxxlarge text-white">Why</span> ERAKTA NEPAL?
          </h6>
          <p className="text-muted">
            Existing blood management system in Nepal is manual, cumbersome and
            inefficient. Most blood banks record the information on blood
            divlection/supply manually in registers. Maintaining blood stock
            inventory is tedious with laborious back-office paperwork and
            managing information on availability and shortage of blood is a tall
            task. A social initiative for a smart, transparent and holistic
            blood management service from divlection to supply. When it comes to
            blood, right information at the right time can be the answer to a
            life and death situation.
          </p>
        </div>
      </div>

      <div className="p-2 mt-4  border rounded ">
        <h6 className="huge text-primary">
          <span className="xxxxlarge text-white">What </span> We Do?
        </h6>
        <p className="text-muted">
          Blood banks play a vital role in ensuring the availability of safe and
          sufficient blood supply for medical treatments and emergency
          situations. A blood bank management system is an essential tool that
          facilitates the efficient management of the entire blood donation and
          distribution process. The "What We Do" section of a blood bank
          management system provides an overview of the activities and services
          provided by the blood bank, including the collection, testing,
          storage, and distribution of blood. In this section, donors and other
          stakeholders can learn about the blood bank's impact on the community,
          the number of blood donations collected, and the various services
          provided to ensure the safety and quality of donated blood.
        </p>
        <Row className="mx-2 d-flex justify-content-center ">
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info py-2">
              <h6 className="xxxlarge">21</h6>
              <h6 className="xlarge mb-0">Event Organized</h6>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info  py-2">
              <h6 className="xxxlarge">322</h6>
              <h6 className="xlarge mb-0">Blood Collected</h6>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info  py-2">
              <h6 className="xxxlarge">17</h6>
              <h6 className="xlarge mb-0">Life Saved</h6>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info  py-2">
              <h6 className="xxxlarge">872</h6>
              <h6 className="xlarge mb-0">Blood Searched</h6>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mt-4 border rounded text-center py-2">
        <h6 className="xxxxlarge">Meet Our Team</h6>
        <div className="d-flex  justify-content-around mt-5">
          {ourTeam.map((member) => {
            return (
              <div key={member.name} className="text-center">
                <Image width={120} roundedCircle src={member.photoLink} />
                <h6 className="xxlarge mt-1">{member.name}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
