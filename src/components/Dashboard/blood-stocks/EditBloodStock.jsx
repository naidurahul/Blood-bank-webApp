import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";

const EditBloodStock = ({ openEditBloodStock, handleClose, onFormSubmit }) => {
  const [formValues, setFormValues] = useState({});
  useEffect(() => {
    setFormValues(openEditBloodStock);
  }, [openEditBloodStock]);
  return (
    <>
      {" "}
      <Modal show={openEditBloodStock !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          {" "}
          <h6 className="mb-0 xxlarge d-flex">
            <PencilSquare size={30} className="mr-2" /> Update Blood Stock [
            {openEditBloodStock?.bg}]
          </h6>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form.Label className="text-dark mb-0">Stock</Form.Label>
            <Form.Group className="">
              <Form.Control
                type="number"
                placeholder=""
                value={formValues?.stock}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    stock: e.target.value >= 0 ? Number(e.target.value) : 0,
                  })
                }
                className=""
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
            onClick={() =>
              onFormSubmit({
                data: formValues,
                mode: openEditBloodStock?._id ? "edit" : "add",
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
