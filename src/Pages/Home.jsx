import React, { useState } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Nabvar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

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
          <Col xs={12} md={6} lg={6} />
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
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Home;
