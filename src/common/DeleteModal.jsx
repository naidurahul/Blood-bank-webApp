import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";

const DeleteModal = ({ openDeleteModal, onHide, onDelete }) => {
  return (
    <>
      <Modal show={openDeleteModal !== null} onHide={onHide}>
        <Modal.Header closeButton>
          <h6 className="mb-0 xxlarge d-flex">
            <Trash3Fill size={30} className="mr-2" /> Delete Modal{" "}
          </h6>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="danger  mr-2" onClick={onHide}>
            Close
          </Button>
          <Button
            size="sm"
            variant="bootstrap-primary text-white mr-2"
            onClick={() => onDelete(openDeleteModal?._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
