import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { BookmarkCheckFill, PatchCheckFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";

const ContactUs = () => {
  const [feedbackData, setFeedbackData] = useState({});
  const saveFeedback = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/feedback`,
        { ...feedbackData }
      );
      if (data.status) {
        toast.success("Your Feedback has been succesfully sent!");
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
      <h6 className="xxxxlarge text-center text-dark  mb-4">
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
              <span className="xxxxlarge text-dark">Why do we need</span> Your
              Feedback?
            </h6>{" "}
            <div className=" d-flex justify-content-between">
              <PatchCheckFill className="text-green" size={50} />{" "}
              <h3 className="large ml-2">
                Feedback is extremely important for blood banks like eRakta
                Nepal because it helps them to understand the needs and
                preferences of their donors and recipients. By collecting
                feedback from donors and recipients, eRakta Nepal can identify
                areas where they need to improve their services and operations,
                as well as areas where they are doing well.
              </h3>
            </div>{" "}
            <div className=" d-flex justify-content-between">
              <PatchCheckFill className="text-green" size={60} />{" "}
              <h3 className="large ml-2">
                For example, donors may provide feedback on their experience
                during the donation process, such as the cleanliness of the
                donation center, the professionalism of the staff, and the ease
                of the donation process. Recipients may provide feedback on the
                quality of the blood they received, the communication from
                eRakta Nepal about their donation, and the overall satisfaction
                with their experience.
              </h3>
            </div>{" "}
            <div className=" d-flex justify-content-between">
              <PatchCheckFill className="text-green" size={50} />{" "}
              <h3 className="large ml-2">
                Additionally, feedback can help eRakta Nepal to identify
                potential issues or problems before they become major concerns.
                By addressing these issues proactively, eRakta Nepal can avoid
                negative consequences, such as lost donors or recipients, and
                ensure that they are providing the highest quality services
                possible.
              </h3>
            </div>
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
                <Form.Label className="text-dark mb-0">Your Name:</Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder=""
                  className="w-50"
                  value={feedbackData?.name}
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
                    value={feedbackData?.feedback}
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
            <Button
              variant="primary mt-4 w-50 float-right"
              onClick={onSendClick}
            >
              Sends
            </Button>{" "}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;
