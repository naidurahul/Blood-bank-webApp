import React from "react";
import { Card, Table } from "react-bootstrap";
import {
  CardChecklist,
  CheckCircleFill,
  XCircleFill,
} from "react-bootstrap-icons";

const BloodRequest = () => {
  return (
    <>
      <Card className="mt-3 ml-2 w-50">
        <Card.Header className="py-0 px-1 text-center">
          <h6 className="my-2 xxlarge d-flex">
            <CardChecklist size={30} className="mt-0 mr-1" />
            Blood Request Form{" "}
          </h6>
        </Card.Header>{" "}
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Group</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light-green">
              <td>Samrat Ojha</td>
              <td>Biratnagar</td>
              <td>O+</td>
              <td className="text-center d-flex justify-content-around">
                <CheckCircleFill size={20} className="text-green hover" />
                <XCircleFill size={20} className="text-danger hover" />{" "}
              </td>
            </tr>
            <tr className="bg-light-red">
              <td>Anshu Yadav</td>
              <td>Sinduli</td>
              <td>AB+</td>
              <td className="text-center d-flex justify-content-around">
                <CheckCircleFill size={20} className="text-green hover" />
                <XCircleFill size={20} className="text-danger hover" />{" "}
              </td>
            </tr>
            <tr className="bg-light-red">
              <td>Neha Koirala</td>
              <td>Kathmandu</td>
              <td>A-</td>
              <td className="text-center d-flex justify-content-around">
                <CheckCircleFill size={20} className="text-green hover" />
                <XCircleFill size={20} className="text-danger hover" />{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default BloodRequest;
