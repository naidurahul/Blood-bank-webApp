import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { bloodCampFormFields } from "../../../global/constants";
import { DatabaseX, PencilSquare } from "react-bootstrap-icons";

const AddOrEditBloodCamps = ({
  openEditOrAddFormModal,
  handleClose,
  onFormSubmit,
}) => {
  const [formValues, setFormValues] = useState({});
  const [openParticipants, setOpenParticipants] = useState(false);
  const handleCancelOrClose = () => {
    handleClose();
    setOpenParticipants(false);
  };

  useEffect(() => {
    setFormValues(openEditOrAddFormModal);
  }, [openEditOrAddFormModal]);
  return (
    <>
      {" "}
      <Modal
        show={openEditOrAddFormModal !== null}
        onHide={handleCancelOrClose}
      >
        <Modal.Header closeButton>
          <h6 className="mb-0 xxlarge d-flex">
            <PencilSquare size={30} className="mr-2" />{" "}
            {openEditOrAddFormModal?._id ? "Update Notice" : "Add Notice"}
          </h6>
        </Modal.Header>
        <Modal.Body>
          {!openParticipants && (
            <div>
              {bloodCampFormFields.map((field) => {
                return (
                  <>
                    <Form.Label className="text-dark mb-0">
                      {field.label}
                    </Form.Label>
                    <Form.Group className="">
                      <Form.Control
                        type={field.type}
                        value={formValues?.[field.name]}
                        placeholder=""
                        className=""
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            [field.name]: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </>
                );
              })}
            </div>
          )}
          {openParticipants &&
            (!formValues?.donorRegistered?.length ? (
              <h6 className="mt-2 w-100 d-flex xxlarge justify-content-center">
                <DatabaseX
                  size={30}
                  className="mr-1"
                  style={{ marginTop: "-10px" }}
                />{" "}
                No Participants to Show!
              </h6>
            ) : (
              <>
                <h6 className="mid-font text-dark my-1">All Participants</h6>

                <Table striped bordered hover style={{ marginBottom: "0px" }}>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Contact Number</td>
                    </tr>
                  </thead>
                  <tbody>
                    {openEditOrAddFormModal?.donorRegistered?.map((donor) => {
                      return (
                        <tr>
                          <td>{donor?.name}</td>
                          <td>{donor?.contactNumber}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </>
            ))}
        </Modal.Body>
        <Modal.Footer>
          {openEditOrAddFormModal?._id && (
            <Button
              size="sm"
              variant="light-green  mr-2"
              onClick={() => setOpenParticipants(!openParticipants)}
            >
              {openParticipants ? "Hide Participants" : "View Participants"}{" "}
            </Button>
          )}
          <Button
            size="sm"
            variant="danger  mr-2"
            onClick={handleCancelOrClose}
          >
            Close
          </Button>
          <Button
            size="sm"
            variant="bootstrap-primary text-white mr-2"
            onClick={() =>
              onFormSubmit({
                data: formValues,
                mode: formValues?._id ? "edit" : "add",
              })
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddOrEditBloodCamps;
