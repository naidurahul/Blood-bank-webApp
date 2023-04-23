import React from "react";
import { Modal, Table } from "react-bootstrap";
import { PencilSquare, People } from "react-bootstrap-icons";

const ViewParticipants = ({ openParticipants, handleClose }) => {
  return (
    <>
      <Modal show={openParticipants !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6 className="mb-0 xxlarge d-flex">
            <People size={30} className="mr-2" /> Participants{" "}
          </h6>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover style={{ marginBottom: "0px" }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Contact Number</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vanue</td>
                <td>Action</td>
              </tr>
            </tbody>
          </Table>{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewParticipants;
