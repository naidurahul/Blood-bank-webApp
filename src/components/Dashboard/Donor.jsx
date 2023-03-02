import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { donorFields } from "../../common/constants";
import Loader from "../../common/Loader";

const ConfirmDelete = ({
  openDeleteDonorModal,
  handleClose,
  handelDeleteDonor,
}) => {
  return (
    <Modal show={openDeleteDonorModal !== null} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {openDeleteDonorModal?.name}?
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" variant="secondary mr-2" onClick={handleClose}>
          Close
        </Button>
        <Button
          size="sm"
          variant="danger mr-2"
          onClick={() => handelDeleteDonor(openDeleteDonorModal?._id)}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const DonorRegistrationDetails = () => {
  const [donorList, setDonorList] = useState([]);
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
      console.log(data.msg);
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
      <div className="pl-2">
        <Row noGutters>
          <Col xs={12} md={8} lg={8}>
            <div>
              <Form>
                <Form.Control
                  placeholder="Search donor by name here.."
                  value={searchQuery}
                  onChange={(e) => setSearchQUery(e.target.value)}
                ></Form.Control>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      {fetchingDonors ? (
        <div className="px-2">
          <Loader />
        </div>
      ) : (
        <>
          {filteredList.length === 0 ? (
            <>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  marginTop: 100,
                }}
              >
                <h6 className="xlarge">No Donors to Show!</h6>
              </div>{" "}
            </>
          ) : (
            <>
              <div className="px-2">
                {filteredList
                  ? filteredList.map((value, index) => {
                      return (
                        <>
                          <Card className="my-3">
                            <Card.Header className="d-flex justify-content-between ">
                              <div>
                                Blood Group:{" "}
                                <span
                                  className="rounded  text-white px-1"
                                  style={{ backgroundColor: "#cf3e51" }}
                                >
                                  {" "}
                                  {value.bloodGroup}
                                </span>{" "}
                              </div>
                              <div>
                                <Button
                                  onClick={() => setOpenDeleteDonorModal(value)}
                                  size="sm"
                                  variant="danger mr-2"
                                >
                                  Delete
                                </Button>
                                <Button size="sm" variant="success ">
                                  Edit
                                </Button>
                              </div>
                            </Card.Header>
                            <Card.Body className="d-flex p-1 py-2">
                              <div
                                style={{ minWidth: 120, maxWidth: 120 }}
                                className=""
                              >
                                <div className="text-center">
                                  <PersonCircle size={70} className="ml-5" />
                                  <h6 className="mb-0 mt-2 font-weight-bold xxlarge">
                                    {value.name}
                                  </h6>
                                  <h6
                                    className="mb-0  xlarge"
                                    style={{ color: "#ad2a2a" }}
                                  >
                                    {value.address}
                                  </h6>
                                  <h6 className="  mb-0 large">
                                    {value.gender}
                                  </h6>
                                </div>
                              </div>

                              <div>
                                <Row noGutters className="">
                                  {donorFields.map((field) => {
                                    return (
                                      <Col
                                        xs={12}
                                        md={4}
                                        lg={3}
                                        key={field.key}
                                        className={`mt-0`}
                                      >
                                        <p className="mb-0 text-dark">
                                          <span className="text-muted xlarge">
                                            {field.label}:{" "}
                                          </span>
                                        </p>
                                        <p
                                          className="mb-0  text-dark px-2 py-1 mid rounded"
                                          style={{ backgroundColor: "#f5c6c6" }}
                                        >
                                          {value[field.name] ?? "N/A"}
                                        </p>
                                      </Col>
                                    );
                                  })}
                                </Row>
                              </div>
                            </Card.Body>
                          </Card>
                        </>
                      );
                    })
                  : null}
              </div>
              <ConfirmDelete
                openDeleteDonorModal={openDeleteDonorModal}
                handleClose={() => setOpenDeleteDonorModal(null)}
                handelDeleteDonor={handelDeleteDonor}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default DonorRegistrationDetails;
