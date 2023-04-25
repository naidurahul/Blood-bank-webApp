import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  ArrowRight,
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
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

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
              <Facebook className="mr-5 hover" />{" "}
              <Instagram className="mr-5 hover" />{" "}
              <Twitter className="mr-5 hover" />{" "}
              <Youtube className="mr-5 hover" />
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
            <h6 className="text-dark xxxlarge">Control Panel</h6>
            <div className="d-flex">
              <Button
                variant="dark d-flex border-dark"
                onClick={() =>
                  navigate(`/admin/dashboard`, { replace: true })
                }
              >
                Dashboard <ArrowRight className="mt-1 ml-2" />
              </Button>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
