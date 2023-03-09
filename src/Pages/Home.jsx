import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import BloodDonationProgram from "../assets/BloodDonationProgram.jpg";

const Home = () => {
  return (
    <>
      <div className="mt-5 mx-5">
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
      <div className="mt-5 mx-5">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="p-2 d-flex flex-column align-items-center justify-content-center h-100 ">
              <Button variant="outline-primary text-white border-white  w-50 ">
                Blood Camps
              </Button>{" "}
            </div>{" "}
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="p-2  border rounded">
              <h6 className="huge text-primary">
                <span className="xxxxlarge text-white">Why</span> ERAKTA NEPAL?
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
          <Col xs={12} md={6} lg={6} className="mt-5">
            <div className="p-2  border rounded">
              <h6 className="huge text-primary">
                <span className="xxxxlarge text-white">Works of</span> ERAKTA
                NEPAL?
              </h6>
              <Image
                height={200}
                width={250}
                src={BloodDonationProgram}
                className=""
              />{" "}
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                repudiandae iusto vero aperiam, dolorum repellendus ratione qui
                dolorem tempora aut magni expedita impedit at voluptates sed
                itaque aliquid. Maxime, consequuntur!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
