import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { donorFields } from "../../../global/constants";
import { CardText } from "react-bootstrap-icons";

const DonorDetail = ({ openDetailModal, handleClose }) => {
  return (
    <>
      <Modal show={openDetailModal !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6 className="mb-0 xxlarge d-flex">
            <CardText size={30} className="mr-2" /> Donor Detail
          </h6>
        </Modal.Header>
        <Modal.Body className="py-1 px-3">
          <div>
            <Row className="">
              {donorFields.map((field) => {
                return (
                  <Col xs={12} md={6} lg={6} key={field.key} className={`mt-0`}>
                    <p className="mb-0 text-dark">
                      <span className="text-muted xlarge">{field.label}: </span>
                    </p>
                    <p className="mb-0 bg-light-green  text-dark px-2 py-1 mid rounded">
                      {openDetailModal?.[field.name] ?? "N/A"}
                    </p>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="danger mr-2" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DonorDetail;
