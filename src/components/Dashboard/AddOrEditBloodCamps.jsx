import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddOrEditBloodCamps = ({ openAddOrEditBloodCamp, handleClose }) => {
  return (
    <>
      {" "}
      <Modal show={openAddOrEditBloodCamp !== null} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary  mr-2" onClick={handleClose}>
            Close
          </Button>
          <Button size="sm" variant="danger text-white mr-2">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddOrEditBloodCamps;
