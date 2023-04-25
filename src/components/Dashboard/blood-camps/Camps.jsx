import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import {
  DatabaseX,
  HCircle,
  PencilSquare,
  TrashFill,
} from "react-bootstrap-icons";
import { addOrUpdateItemInArray } from "../../../global/constants";
import moment from "moment";
import { toast } from "react-toastify";
import AddOrEditBloodCamps from "./AddOrEditModal";
import Loader from "../../../common/Loader";
import DeleteModal from "../../../common/DeleteModal";

const Camps = () => {
  const [openAddOrEditBloodCamp, setOpenAddOrEditBloodCamp] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(null);
  const [bloodCamps, setBloodCamps] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);

  const onFormSubmit = (data) => {
    if (!data?.data?.cName) return toast.error("Camp Name is required!");
    if (!data?.data?.address) return toast.error("Address is required!");
    if (!data?.data?.description)
      return toast.error("Camp Description is required!");
    if (!data?.data?.sDate) return toast.error("Date is required!");
    if (!data?.data?.sTime) return toast.error("Time is required!");
    if (data.mode === "add") {
      addBloodCamp(data.data);
    } else {
      editBloodCamp(data.data);
    }
  };

  const addBloodCamp = async (details) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/blood-camp`,
        { ...details }
      );
      if (data.status) {
        toast.success("Succesfully Added");
        setBloodCamps([...addOrUpdateItemInArray(bloodCamps, data.msg)]);
        setOpenAddOrEditBloodCamp(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const editBloodCamp = async (details) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/blood-camp`,
        { ...details }
      );
      if (data.status) {
        console.log(data.msg);
        setBloodCamps([...addOrUpdateItemInArray(bloodCamps, data.msg)]);
        toast.success("Succesfully Edited");
        setOpenAddOrEditBloodCamp(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchData = async () => {
    try {
      setFetchingData(true);
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blood-camp"
      );
      setBloodCamps(data.msg);
      setFetchingData(false);
    } catch (error) {
      console.log(error.message);
      setFetchingData(false);
    }
  };
  const deteletBloodCamp = async (id) => {
    try {
      setFetchingData(true);
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/blood-camp/${id}`
      );
      setBloodCamps([...bloodCamps.filter((x) => x._id !== id)]);
      setFetchingData(false);
    } catch (error) {
      console.log(error.message);
      setFetchingData(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Card className="w-50 ml-2">
        <Card.Header className="py-0 px-1 d-flex justify-content-between text-center">
          <h6 className="my-2 xxlarge d-flex">
            <HCircle size={30} className="mt-0 mr-1" />
            Blood Camps
          </h6>
          <Button
            size="sm"
            variant="bootstrap-primary text-white px-1 py-1 my-2"
            onClick={() => setOpenAddOrEditBloodCamp({})}
          >
            Add New
          </Button>
        </Card.Header>
        {fetchingData ? (
          <div className="px-2">
            <Loader />
          </div>
        ) : !bloodCamps.length ? (
          <h6 className="mt-5 w-100 d-flex xxlarge justify-content-center">
            <DatabaseX
              size={30}
              className="mr-1"
              style={{ marginTop: "-10px" }}
            />{" "}
            No Data to Show!
          </h6>
        ) : (
          <Table striped bordered hover style={{ marginBottom: "0px" }}>
            <thead>
              <tr>
                <td>Camp Description</td>
                <td>Time</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {bloodCamps?.map((camp) => {
                return (
                  <tr className="">
                    <td>{camp?.cName}</td>
                    <td>{moment(camp.sDate).format("MMM Do YYYY")}</td>
                    <td className="text-center d-flex justify-content-around">
                      <PencilSquare
                        size={20}
                        className="text-green hover"
                        onClick={() => setOpenAddOrEditBloodCamp(camp)}
                      />
                      <TrashFill
                        size={20}
                        className="ml-2 hover text-danger"
                        onClick={() => setOpenDeleteModal(camp)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Card>{" "}
      <DeleteModal
        openDeleteModal={openDeleteModal}
        onHide={() => setOpenDeleteModal(null)}
        onDelete={(id) => {
          console.log(id);
          setOpenDeleteModal(null);
          deteletBloodCamp(id);
        }}
      />
      <AddOrEditBloodCamps
        openEditOrAddFormModal={openAddOrEditBloodCamp}
        handleClose={() => setOpenAddOrEditBloodCamp(null)}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
};

export default Camps;
