import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { ChatLeftText } from "react-bootstrap-icons";
import Loader from "../../common/Loader";
import { toSentenceCase } from "../../global/helper";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(feedbacks);
  const fetchDonor = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:4000/api/v1/feedback");
      setFeedbacks(data.msg);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchDonor();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        feedbacks?.map((feedback) => {
          return (
            <Card className="w-50 p-2 my-3">
              <div className="d-flex">
                <div>
                  <ChatLeftText size={30} className="mt-2 mr-2" />
                </div>
                <div>
                  <Form.Label className="text-dark mb-0">
                    Sender Name
                  </Form.Label>
                  <h6>{toSentenceCase(feedback?.name)}</h6>
                  <Form.Label className="text-dark mb-0">Feedback</Form.Label>
                  <h6>{feedback?.feedback}</h6>
                </div>
              </div>
            </Card>
          );
        })
      )}
    </>
  );
};

export default Feedback;
