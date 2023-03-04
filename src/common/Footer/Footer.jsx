import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { EnvelopeAt, Phone, Telegram, Telephone } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Row className="mx-5 mt-5 mb-2">
        <Col xs={12} md={6} lg={4}>
          {" "}
          <div className="w-100">
            <h6 className="text-white xxxlarge ">Quick Link</h6>
            <div className="text-white ">
              <h6 className="xlarge thin-fw hover">Donate Blood</h6>
              <h6 className="xlarge thin-fw hover">Request Blood</h6>
              <h6 className="xlarge thin-fw hover">Blood Search</h6>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <div className="w-100">
            <h6 className="text-white xxxlarge">Contact Us</h6>{" "}
            <div className="text-white ">
              <h6 className="xlarge thin-fw d-flex">
                Mobile
                <Phone className="mx-2" />: 9800975519
              </h6>
              <h6 className="xlarge thin-fw d-flex">
                Tele Phone
                <Telephone className="mx-2" />: 021-463384
              </h6>{" "}
              <h6 className="xlarge thin-fw d-flex">
                Mobile
                <EnvelopeAt className="mx-2" />: eraktanepal@gmail.com
              </h6>{" "}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="w-100">
            <h6 className="text-white xxxlarge">Newsletter</h6>
            <div className="d-flex">
              <Form.Group className="mb-3">
                <Form.Control
                  type={"text"}
                  placeholder="Enter Email Here"
                  className="border-muted"
                />
              </Form.Group>
                <Telegram size={30} className='ml-3 mt-1 hover text-white' />
             
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
