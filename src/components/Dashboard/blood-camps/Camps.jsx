import React from "react";
import { Card, Table } from "react-bootstrap";
import { HCircle, PencilSquare } from "react-bootstrap-icons";

const Camps = () => {
  return (
    <>
      <Card className="w-50 ml-2">
        <Card.Header className="py-0 px-1 text-center">
          <h6 className="my-2 xxlarge d-flex">
            <HCircle size={30} className="mt-0 mr-1" />
            Blood Camps
          </h6>
        </Card.Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Vanue</td>
              <td>Time</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>Samrat Ojha</td>
              <td>Biratnagar</td>
              <td className="text-center d-flex justify-content-around">
                <PencilSquare size={20} className="text-green hover" />
              </td>
            </tr>
            <tr className="">
              <td>Anshu Yadav</td>
              <td>Sinduli</td>
              <td className="text-center d-flex justify-content-around">
                <PencilSquare size={20} className="text-green hover" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default Camps;
