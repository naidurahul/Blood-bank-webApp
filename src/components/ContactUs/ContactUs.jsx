import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";
import Contact from "../../assets/ContactUs.png";
import { ArrowRight, ChatDotsFill, Send } from "react-bootstrap-icons";

const ContactUs = () => {
  const [feedbackData, setFeedbackData] = useState(null);
  const saveFeedback = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/feedback`,
        { ...feedbackData }
      );
      if (data.status) {
        toast.success("Your Feedback has been succesfully sent!");
        setFeedbackData(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSendClick = () => {
    if (!feedbackData?.name) {
      return toast.error("Please Enter your Name!");
    }
    if (!feedbackData?.feedback) {
      return toast.error("Please Give some feedback!");
    }
    saveFeedback();
  };

  return (
    <>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Image src={Contact} width={700} />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="px-3">
            <h6 className="huge mb-0 text-dark">
              Love to hear from you,
              <h6 className="huge mb-0 text-dark d-flex">
                Get in touch
                <ChatDotsFill className="ml-2 mt-1 text-light-green" />
              </h6>
            </h6>
            <div className="mt-2">
              <Form.Group className="w-100">
                <Form.Label className="text-dark mb-0">Your Name:</Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder=""
                  className="w-50"
                  value={feedbackData?.name ?? ""}
                  onChange={(e) =>
                    setFeedbackData({ ...feedbackData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form>
                <Form.Group controlId="feedbackTextArea">
                  <Form.Label className="text-dark mb-0">Feedback:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your feedback here"
                    value={feedbackData?.feedback ?? ""}
                    onChange={(e) =>
                      setFeedbackData({
                        ...feedbackData,
                        feedback: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Form>
            </div>
            <Button variant="outline-green mt-3 d-flex" onClick={onSendClick}>
              Sends <ArrowRight className="mt-1 ml-2" />
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;
