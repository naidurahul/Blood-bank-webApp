import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Edit from "./Edit";

const Request = () => {
  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/request"
        );
        console.log(data.msg);
        setDonor(data.msg);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [render]);

  return (
    <>
      {show && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Blood Request Has Been Approved.</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          />
        </div>
      )}
      <h1 className="text-4xl text-center my-2" style={{ color: "#2C5282" }}>
        Blood Request
      </h1>
      {loading ? (
        <>
          <div
            className="spinner-border mx-auto my-3"
            role="status"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="text-sm font-bold text-red-600 mt-1 text-center">
            Loading...
          </h2>
        </>
      ) : (
        <>
          <div style={{ width: "100%", overflowX: "scroll" }}>
            <table className="table container">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Blood Group</th>

                  <th scope="col">Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Accept</th>
                </tr>
              </thead>
              <tbody>
                {donor
                  ? donor.map((value, index) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{value ? value.name : null}</td>
                            <td>{value ? value.gender : null}</td>
                            <td>{value ? value.bloodGroup : null}</td>
                            <td>{value ? value.address : null}</td>
                            <td>{value ? value.phoneNumber : null}</td>
                            <td>{value ? value.email : null}</td>
                            <Edit
                              value={value}
                              render={render}
                              setRender={setRender}
                              setShow={setShow}
                            />
                          </tr>
                        </>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Request;
