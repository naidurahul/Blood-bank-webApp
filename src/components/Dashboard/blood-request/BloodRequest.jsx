import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import {
  CardChecklist,
  CheckCircleFill,
  InfoCircleFill,
  XCircleFill,
} from "react-bootstrap-icons";
import { toast } from "react-toastify";
import Loader from "../../../common/Loader";
import { addOrUpdateItemInArray } from "../../../global/constants";
import RequestDetail from "./RequestDetail";

const BloodRequest = () => {
  const [requester, setRequester] = useState([]);
  const [openDetailModal, setOpenDetailmodal] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleEdit = async (value) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/blood-request`,
        { ...value }
      );
      if (data.status) {
        toast.success(
          value?.status === "accepted"
            ? "Request has been Approved!"
            : "Request has been Declined!"
        );
        setRequester([...addOrUpdateItemInArray(requester, value, "_id")]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/blood-request"
        );
        setRequester(data.msg);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Card className="mt-2 ml-2 w-50 py-0">
        <Card.Header className="py-0 px-1 text-center">
          <h6 className="my-2 xxlarge d-flex">
            <CardChecklist size={30} className="mt-0 mr-1" />
            Blood Request Form{" "}
          </h6>
        </Card.Header>{" "}
        {loading ? (
          <div className="px-2">
            <Loader />
          </div>
        ) : (
          <Table striped bordered hover style={{ marginBottom: "0px" }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Address</td>
                <td>Group</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {requester?.map((request) => {
                return (
                  <tr
                    className={
                      request?.status === "accepted"
                        ? "bg-light-green"
                        : "bg-light-red"
                    }
                  >
                    <td>{request?.name}</td>
                    <td>{request?.address}</td>
                    <td>{request?.bloodGroup}</td>
                    <td className="text-center d-flex justify-content-around">
                      <InfoCircleFill
                        size={20}
                        className="text-light-blue hover"
                        onClick={() => setOpenDetailmodal(request)}
                      />
                      <CheckCircleFill
                        size={20}
                        className="text-green hover"
                        onClick={() =>
                          handleEdit({ ...request, status: "accepted" })
                        }
                      />
                      <XCircleFill
                        size={20}
                        className="text-danger hover"
                        onClick={() =>
                          handleEdit({ ...request, status: "rejected" })
                        }
                      />{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Card>
      <RequestDetail
        openDetailModal={openDetailModal}
        handleClose={() => setOpenDetailmodal(null)}
      />
    </>
  );
};

export default BloodRequest;
