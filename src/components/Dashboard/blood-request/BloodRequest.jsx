import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import {
  CardChecklist,
  CheckCircleFill,
  InfoCircleFill,
  SortAlphaDown,
  SortAlphaUp,
  Trash3Fill,
  XCircleFill,
} from "react-bootstrap-icons";
import { toast } from "react-toastify";
import Loader from "../../../common/Loader";
import { addOrUpdateItemInArray } from "../../../global/constants";
import RequestDetail from "./RequestDetail";
import DeleteModal from "../../../common/DeleteModal";
import { insertionSort, priorityQueue } from "../../../global/helper";

const BloodRequest = () => {
  const [requester, setRequester] = useState([]);
  const [sort, setSort] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQUery] = useState("");
  const [openDetailModal, setOpenDetailmodal] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handelDeleteRequester = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/blood-request/${id}`
      );
      setOpenDetailmodal(null);
      toast.success("Requester Deleted Successfully!");
      fetchingBloodRequest();
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
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
        setFilteredList([...addOrUpdateItemInArray(requester, value, "_id")]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchingBloodRequest = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blood-request"
      );
      priorityQueue(data.msg);
      setRequester(data.msg);
      setFilteredList(data.msg);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  const filterRule = (requester) => {
    return (
      requester.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      requester.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      requester.bloodGroup.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredValue =
      searchQuery !== ""
        ? requester?.filter((requester) => filterRule(requester))
        : [...requester];
    if (sort) {
      setFilteredList([...insertionSort(filteredValue)]);
    } else {
      setFilteredList(filteredValue);
    }
  }, [searchQuery, sort]);
  useEffect(() => {
    fetchingBloodRequest();
  }, []);
  return (
    <>
      <Card className="mt-2 ml-2 w-50 py-0">
        <Card.Header className="py-0 px-1 text-center d-flex justify-content-between">
          <h6 className="my-2 xxlarge d-flex">
            <CardChecklist size={30} className="mt-0 mr-1" />
            Blood Request Form{" "}
          </h6>
          <div className="d-flex">
            {sort ? (
              <SortAlphaDown
                className="mx-2 text-muted hover mt-2"
                size={25}
                onClick={() => setSort(!sort)}
              />
            ) : (
              <SortAlphaUp
                className="mx-2 text-muted hover mt-2"
                size={25}
                onClick={() => setSort(!sort)}
              />
            )}
            <Form className="my-1">
              <Form.Control
                placeholder="Search requester here..."
                value={searchQuery}
                onChange={(e) => setSearchQUery(e.target.value)}
              ></Form.Control>
            </Form>
          </div>
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
              {filteredList?.map((request) => {
                return (
                  <tr
                    className={
                      request?.status === "accepted"
                        ? "bg-light-green hover"
                        : "bg-light-red hover"
                    }
                  >
                    <td onClick={() => setOpenDetailmodal(request)}>
                      {request?.name}
                    </td>
                    <td onClick={() => setOpenDetailmodal(request)}>
                      {request?.address}
                    </td>
                    <td onClick={() => setOpenDetailmodal(request)}>
                      {request?.bloodGroup}
                    </td>
                    <td className="text-center d-flex justify-content-around">
                      <Trash3Fill
                        size={20}
                        className="text-danger hover"
                        onClick={() => setOpenDeleteModal(request)}
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
      <DeleteModal
        openDeleteModal={openDeleteModal}
        onHide={() => setOpenDeleteModal(null)}
        onDelete={(id) => {
          console.log(id);
          setOpenDeleteModal(null);
          handelDeleteRequester(id);
        }}
      />
      <RequestDetail
        openDetailModal={openDetailModal}
        handleClose={() => setOpenDetailmodal(null)}
      />
    </>
  );
};

export default BloodRequest;
