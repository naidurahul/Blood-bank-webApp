import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { bloodCampFormFields } from "../../global/constants";

const EditBloodStock = ({ openEditBloodStock, handleClose, onFormSubmit }) => {
  const [formValues, setFormValues] = useState({});
  useEffect(() => {
    setFormValues(openEditBloodStock);
  }, [openEditBloodStock]);
  return (
    <>
      {" "}
      <Modal show={openEditBloodStock !== null} onHide={handleClose}>
        <Modal.Header closeButton>Blood Stock</Modal.Header>
        <Modal.Body>
          <div>
            <h6 className="mid-font text-dark my-1">Stock</h6>
            <Form.Group className="">
              <Form.Control
                type="number"
                placeholder=""
                value={formValues?.stock}
                onChange={(e) =>
                  setFormValues({
                    bg: openEditBloodStock?.bg,
                    stock: e.target.value >= 0 ? Number(e.target.value) : 0,
                  })
                }
                className="border-muted"
              />
            </Form.Group>
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

export default EditBloodStock;
