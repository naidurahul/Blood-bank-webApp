import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  EnvelopeAt,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Telegram,
  Telephone,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Row
        className="px-2 mx-1 py-3 mt-5 mb-0 "
        style={{ borderTop: "1px solid #c9bebd" }}
      >
        <Col xs={12} md={6} lg={4}>
          {" "}
          <div className="w-100">
            <h6 className="text-dark xxxlarge ">Social Link</h6>
            <div className="text-dark d-flex">
              <Facebook className="mr-4 hover" />{" "}
              <Instagram className="mr-4 hover" />{" "}
              <Twitter className="mr-4 hover" />{" "}
              <Youtube className="mr-4 hover" />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <div className="w-100">
            <h6 className="text-dark xxxlarge">Contact Us</h6>{" "}
            <div className="text-dark ">
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
            <h6 className="text-dark xxxlarge">Newsletter</h6>
            <div className="d-flex">
              <Form.Group className="mb-3">
                <Form.Control
                  type={"text"}
                  placeholder="Enter Email Here"
                  className="border-muted"
                />
              </Form.Group>
              <Telegram size={30} className="ml-3 mt-1 hover text-dark" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
