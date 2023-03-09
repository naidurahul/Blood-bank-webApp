import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const ContactUs = () => {
  return (
    <>
      <h6 className="xxxxlarge text-center text-white  mb-4">
        <Typewriter
          options={{
            strings: [
              "Give us some feedbacks",
              "We are waiting for your FeedBacks",
            ],

            autoStart: true,
            loop: true,
          }}
        />
      </h6>

      <Row>
        <Col xs={12} md={6} lg={6}>
          <div className="px-2 pt-2 border rounded mb-2">
            <h6 className="xxxxlarge text-primary mb-0">
              <span className="xxxxlarge text-white">Can I Donate</span> Blood?
            </h6>{" "}
            <p>
              Blood donation is open for almost everyone with only a few
              limitations based on the medical conditions of the blood donor.
              You can donate blood once every three months
            </p>
            <h6 className="xxxxlarge text-primary mb-0">
              <span className="xxxxlarge text-white">Who Can</span> Donate
              Blood?
            </h6>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Card className="p-2 px-3">
            <h6 className="xxlarge mb-0 text-dark">ERakta Feedback form</h6>
            <h6 className="mid text-muted" style={{ fontWeight: 400 }}>
              Your opinion matters to us. We are constantly striving to improve
              our products/services and your feedback will help us to better
              understand how we can serve you. Please take a few minutes to
              share your thoughts with us.
            </h6>
            <div className="mt-2">
              <Form.Group className="">
                <Form.Label className="text-dark">Your Name:</Form.Label>
                <Form.Control type={"text"} placeholder="" className="w-50" />
              </Form.Group>
              <Form>
                <Form.Group controlId="feedbackTextArea">
                  <Form.Label className="text-dark">Feedback:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your feedback here"
                  />
                </Form.Group>
              </Form>
            </div>
            <Button variant="primary mt-4 w-50 float-right">Sends</Button>{" "}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;
