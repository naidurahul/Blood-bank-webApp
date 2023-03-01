import React from "react";

const DonorDetail = () => {
  return (
    <>
      <div className="mt-4" style={{ width: "80%", margin: "0px auto" }}>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Desctiption of Roshan Thapa
        </h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Roshan Thapa</td>
            </tr>
            <tr>
              <td>Date Of Birth</td>
              <td>22 June 2000</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>9800976625</td>
            </tr>
            <tr>
              <td>Blood Group</td>
              <td>A-</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>Biratnagar</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>RoshanThapa66@gmail.com</td>
            </tr>
            <tr>
              <td>Occupation</td>
              <td>Student</td>
            </tr>
            <tr>
              <td>Last Donated</td>
              <td>59 Days Ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DonorDetail;
