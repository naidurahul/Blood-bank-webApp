import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import Loader from "../../common/Loader";
import { addOrUpdateItemInArray } from "../../global/constants";
import AddOrEditBloodCamps from "./AddOrEditModal";

const BloodCamps = () => {
  const [openAddOrEditBloodCamp, setOpenAddOrEditBloodCamp] = useState(null);
  const [bloodCamps, setBloodCamps] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  console.log(moment("12:30", "HH:mm")?._d);
  const onFormSubmit = (data) => {
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
      {fetchingData ? (
        <>
          <Loader />{" "}
        </>
      ) : (
        <>
          <Button
            size="sm"
            variant="green float-right text-dark mr-2"
            onClick={() => setOpenAddOrEditBloodCamp({})}
          >
            Add a New Blood Camp
          </Button>
          <div className="bg-light mt-5 h-100">
            <Table striped bordered hover>
              <thead>
                <tr className="mid text-center">
                  <th>SN</th>
                  <th>Camp Name</th>
                  <th>Camp Description</th>
                  <th>Address</th>
                  <th>Start Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bloodCamps?.length ? (
                  bloodCamps.map((camp, index) => {
                    return (
                      <tr key={camp.cName} className="text-left">
                        <td>{index + 1}</td>
                        <td className="mid">{camp.cName}</td>
                        <td className="mid text-left">
                          {" "}
                          {camp?.description}{" "}
                        </td>{" "}
                        <td className="mid"> {camp.address} </td>
                        <td className="mid">
                          {moment(camp.sDate).format("MMM Do YYYY")}
                        </td>
                        <td className="mid">
                          {moment(moment(camp.sTime, "HH:mm")?._d).format(
                            "HH:mm a"
                          )}{" "}
                        </td>
                        <td className="mid">
                          {" "}
                          {moment(moment(camp.eTime, "HH:mm")?._d).format(
                            "HH:mm a"
                          )}{" "}
                        </td>
                        <td className="d-flex justify-content-center">
                          {" "}
                          <PencilFill
                            className="hover text-green"
                            onClick={() => setOpenAddOrEditBloodCamp(camp)}
                          />
                          <TrashFill
                            className="ml-2 hover text-primary-light"
                            onClick={() => deteletBloodCamp(camp?._id)}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="text-center">
                    <td className="mid"></td>
                    <td className="mid"></td>
                    <td className="mid"> </td>
                    <td className="mid">No any blood camps to show!</td>
                    <td className="mid"> </td>
                    <td className="mid"> </td>
                    <td className="d-flex justify-content-center"></td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </>
      )}
      <AddOrEditBloodCamps
        openEditOrAddFormModal={openAddOrEditBloodCamp}
        handleClose={() => setOpenAddOrEditBloodCamp(null)}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
};

export default BloodCamps;
