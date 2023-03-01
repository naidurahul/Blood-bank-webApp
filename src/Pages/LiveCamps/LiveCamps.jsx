import axios from "axios";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Delete from "../../components/Dashboard/Delete";

const LiveCamps = () => {
  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const User = localStorage.getItem("blood");
  const userInformation = JSON.parse(User);
  console.log(userInformation ? userInformation : "no ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/hospital"
        );
        setDonor(data.msg);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [refresh]);
  return (
    <>
      {show && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Successfully Deleted</strong> .
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          />
        </div>
      )}
      <h1 className="sm:text-3xl mt-4 text-2xl text-center font-medium title-font mb-4 text-gray-900">
        <span className="font-bold text-red-600">
          <Typewriter
            options={{
              strings: ["Live Blood Camps"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      {donor.length === 0 && (
        <h1 className="text-center my-2 text-2xl">No Donor Camps.</h1>
      )}
      {loading && (
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
      )}
      <div style={{ width: "100%", overflowX: "scroll" }}>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Camp Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              {userInformation ? <th scope="col">Action</th> : null}
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
                        <td>{value ? value.address : null}</td>
                        <td>{value ? value.cName : null}</td>

                        <td>{value ? value.sDate : null}</td>

                        <td>{value ? value.eDate : null}</td>
                        {userInformation ? (
                          <td>
                            <Delete
                              id={value ? value._id : null}
                              setShow={setShow}
                              refresh={refresh}
                              setRefresh={setRefresh}
                            />{" "}
                          </td>
                        ) : null}
                      </tr>
                    </>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LiveCamps;
