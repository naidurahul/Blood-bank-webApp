import React from "react";
import { Table } from "react-bootstrap";
import {
  PencilFill,
  SkipEndBtnFill,
  Trash,
  Trash2Fill,
  TrashFill,
} from "react-bootstrap-icons";

const camps = [
  {
    cName: "Nobel Blood Donation, 2079",
    address: "Biratnagar 04",
    sDate: "2023-08-03",
    sTime: "15:12",
    eTime: "12:12",
  },
];
const BloodCamps = () => {
  return (
    <>
      <div className="bg-light">
        <Table striped bordered hover>
          <thead>
            <tr className="mid">
              <th>SN</th>
              <th>Camp Name</th>
              <th>Address</th>
              <th>Start Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {camps.map((camp) => {
              return (
                <tr key={camp.cName}>
                  <td className="mid">1</td>
                  <td className="mid">{camp.cName}</td>
                  <td className="mid"> {camp.address} </td>
                  <td className="mid">{camp.sDate} </td>
                  <td className="mid"> {camp.sTime} </td>
                  <td className="mid"> {camp.eTime} </td>
                  <td className="d-flex">
                    {" "}
                    <PencilFill className="hover text-green" />
                    <TrashFill className="ml-2 hover text-primary-light" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BloodCamps;
