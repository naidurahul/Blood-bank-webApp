import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import {
  CardChecklist,
  DatabaseX,
  SortAlphaDown,
  SortAlphaUp,
  Trash3Fill,
} from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "../../../common/DeleteModal";
import Loader from "../../../common/Loader";
import { donorFieldsToShowInTable } from "../../../global/constants";
import { insertionSort } from "../../../global/helper";
import DonorDetail from "./DonorDetail";

const DonorRegistration = () => {
  const [donorList, setDonorList] = useState([]);
  const [openDetailModal, setOpenDetailmodal] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(null);
  const [sort, setSort] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQUery] = useState("");
  const [fetchingDonors, setFetchingDonors] = useState(false);
  const { pathname } = useLocation();
  const handelDeleteDonor = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/donations/${id}`
      );
      setOpenDetailmodal(null);
      toast.success("Donor Deleted Successfully!");
      fetchingDonor();
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const fetchingDonor = async () => {
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
    fetchingDonor();
  }, []);
  const filterRule = (donor) => {
    console.log();
    return (
      donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.bloodGroup.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredValue =
      searchQuery !== ""
        ? donorList.filter((donor) => filterRule(donor))
        : [...donorList];
    if (sort) {
      setFilteredList([...insertionSort(filteredValue)]);
    } else {
      setFilteredList(filteredValue);
    }
  }, [searchQuery, sort]);
  return (
    <>
      <Card className="mt-2 w-50">
        <Card.Header className="py-0 px-1 text-center d-flex justify-content-between">
          <h6 className="my-2 xxlarge d-flex">
            <CardChecklist size={30} className="mt-0 mr-1" />
            Donor List{" "}
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
                placeholder="Search donor here..."
                value={searchQuery}
                onChange={(e) => setSearchQUery(e.target.value)}
              ></Form.Control>
            </Form>
          </div>
        </Card.Header>{" "}
        {fetchingDonors ? (
          <div className="px-2">
            <Loader />
          </div>
        ) : !filteredList.length ? (
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
                {donorFieldsToShowInTable?.map((donor) => {
                  return <td key={donor.label}>{donor.label}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {filteredList.map((donor) => {
                return (
                  <tr key={donor?.phone} className="hover">
                    <td onClick={() => setOpenDetailmodal(donor)}>
                      {donor?.name}
                    </td>
                    <td onClick={() => setOpenDetailmodal(donor)}>
                      {donor?.bloodGroup}
                    </td>
                    <td onClick={() => setOpenDetailmodal(donor)}>
                      {donor?.phoneNumber}
                    </td>
                    <td className="d-flex justify-content-between">
                      {donor?.address}{" "}
                      <div className="d-flex">
                        <Trash3Fill
                          size={20}
                          className="text-danger mr-1 mt-1 hover"
                          onClick={() => setOpenDeleteModal(donor)}
                        />
                      </div>
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
          handelDeleteDonor(id);
        }}
      />
      <DonorDetail
        openDetailModal={openDetailModal}
        handleClose={() => setOpenDetailmodal(null)}
      />
    </>
  );
};

export default DonorRegistration;
