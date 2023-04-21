import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { CardChecklist } from "react-bootstrap-icons";
import { donorFieldsToShowInTable } from "../../../global/constants";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import DonorDetail from "./DonorDetail";

const DonorRegistration = () => {
  const [donorList, setDonorList] = useState([]);
  const [openDetailModal, setOpenDetailmodal] = useState(null);
  const [openDeleteDonorModal, setOpenDeleteDonorModal] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQUery] = useState("");
  const [fetchingDonors, setFetchingDonors] = useState(false);
  const { pathname } = useLocation();
  const handelDeleteDonor = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/${
          pathname === "/live-blood-camp" ? "hospitals" : "donations"
        }/${id}`
      );
      setOpenDeleteDonorModal(null);
      toast.success("Donor Deleted Successfully!");
      fetchData();
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const fetchData = async () => {
    try {
      setFetchingDonors(true);
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/all/donations"
      );
      setDonorList(data.msg);
      setFilteredList(data.msg);
      setFetchingDonors(false);
    } catch (error) {
      console.log(error.message);
      setFetchingDonors(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filteredValue =
      searchQuery !== ""
        ? donorList.filter((donor) =>
            donor.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [...donorList];
    setFilteredList([...filteredValue]);
  }, [searchQuery]);
  return (
    <>
      <Card className="mt-3 w-50">
        <Card.Header className="py-0 px-1 text-center">
          <h6 className="my-2 xxlarge d-flex">
            <CardChecklist size={30} className="mt-0 mr-1" />
            Donor List{" "}
          </h6>
        </Card.Header>{" "}
        <Table striped bordered hover>
          <thead>
            <tr>
              {donorFieldsToShowInTable?.map((donor) => {
                return <td>{donor.label}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {filteredList.map((donor) => {
              return (
                <tr className="" onClick={() => setOpenDetailmodal(donor)}>
                  <td>{donor?.name}</td>
                  <td>{donor?.bloodGroup}</td>
                  <td>{donor?.phoneNumber}</td>
                  <td>{donor?.address}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
      <DonorDetail
        openDetailModal={openDetailModal}
        handleClose={() => setOpenDetailmodal(null)}
      />
    </>
  );
};

export default DonorRegistration;
