import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Hospital, HospitalFill, PencilSquare } from "react-bootstrap-icons";
import { bloodCampFormFields } from "../../global/constants";
import { toast } from "react-toastify";

const Participant = ({ openParticipantModal, handleClose, onFormSubmit }) => {
  const [participantDetail, setParticipantDetail] = useState({
    name: "",
    contactNumber: "",
  });
  const onSaveClick = () => {
    if (
      participantDetail?.name === "" ||
      participantDetail?.contactNumber === ""
    )
      return toast.error("Please Fill Required Details!");
    onFormSubmit({
      data: {
        ...openParticipantModal,
        donorRegistered: [
          ...openParticipantModal?.donorRegistered,
          participantDetail,
        ],
      },
    });
  };
  return (
    <>
      <Modal show={openParticipantModal !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6 className="mb-0 xxlarge d-flex">
            <Hospital size={30} className="mr-2" />{" "}
            {openParticipantModal?.cName}
          </h6>
        </Modal.Header>
        <Modal.Body>
          <div>
            {" "}
            <Form.Label className="text-dark mb-0">Enter Your Name</Form.Label>
            <Form.Group className="">
              <Form.Control
                type={"text"}
                //   value={formValues?.[field.name]}
                placeholder=""
                className="border-muted"
                onChange={(e) =>
                  setParticipantDetail({
                    ...participantDetail,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>{" "}
            <Form.Label className="text-dark mb-0">
              Enter Your Contact Number
            </Form.Label>
            <Form.Group className="">
              <Form.Control
                type={"text"}
                //   value={formValues?.[field.name]}
                placeholder=""
                className="border-muted"
                onChange={(e) =>
                  setParticipantDetail({
                    ...participantDetail,
                    contactNumber: e.target.value,
                  })
                }
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="danger  mr-2" onClick={handleClose}>
            Close
          </Button>
          <Button
            size="sm"
            variant="bootstrap-primary text-white mr-2"
            onClick={onSaveClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Participant;
