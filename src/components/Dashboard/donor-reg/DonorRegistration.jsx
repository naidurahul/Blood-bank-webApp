import React from "react";
import { Card, Table } from "react-bootstrap";
import { CardChecklist } from "react-bootstrap-icons";
import { donorFieldsToShowInTable } from "../../../global/constants";

const DonorRegistration = () => {
  return (
    <>
      <Card className="mt-3 w-50">
        <Card.Header className="py-0 px-1 text-center">
          <h6 className="my-2 xxlarge d-flex">
            <CardChecklist size={30} className="mt-0 mr-1" />
            Donor Registration Form{" "}
          </h6>
        </Card.Header>{" "}
        <Table striped bordered hover>
          <thead>
            <tr>
              {donorFieldsToShowInTable?.map((donor) => {
                return <td>{donor.label}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light-green">
              <td>Samrat Ojha</td>
              <td>Biratnagar</td>
              <td>O+</td>
            </tr>
            <tr className="bg-light-red">
              <td>Anshu Yadav</td>
              <td>Sinduli</td>
              <td>AB+</td>
            </tr>{" "}
            <tr className="bg-light-green">
              <td>Samrat Ojha</td>
              <td>Biratnagar</td>
              <td>O+</td>
            </tr>
            <tr className="bg-light-red">
              <td>Neha Koirala</td>
              <td>Kathmandu</td>
              <td>A-</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default DonorRegistration;
