import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { bloodCampFormFields } from "../../global/constants";

const AddOrEditBloodCamps = ({
  openEditOrAddFormModal,
  handleClose,
  onFormSubmit,
}) => {
  const [formValues, setFormValues] = useState({});
  useEffect(() => {
    setFormValues(openEditOrAddFormModal);
  }, [openEditOrAddFormModal]);
  return (
    <>
      {" "}
      <Modal show={openEditOrAddFormModal !== null} onHide={handleClose}>
        <Modal.Header closeButton>Blood Camp Form</Modal.Header>
        <Modal.Body>
          <div>
            {bloodCampFormFields.map((field) => {
              return (
                <>
                  <h6 className="mid-font text-dark my-1">{field.label}</h6>
                  <Form.Group className="">
                    <Form.Control
                      type={field.type}
                      value={formValues?.[field.name]}
                      placeholder=""
                      className="border-muted"
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
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary  mr-2" onClick={handleClose}>
            Close
          </Button>
          <Button
            size="sm"
            variant="danger text-white mr-2"
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
