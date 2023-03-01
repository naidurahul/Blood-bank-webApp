import React, { useState } from "react";
import "./Search.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [bloodGroup, setbloodGroup] = useState("A+");
  const [address, setaddress] = useState("");
  const [group, setGroup] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/find/address/group/${bloodGroup}/${address}`
      );
      console.log(data);

      setGroup(data.msg);
      setShow(true);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mt-4 mb-4 text-gray-900">
          <span className="font-bold text-red-600">
            <Typewriter
              options={{
                strings: ["Searching For Life?"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <div className="container">
          <div className="border rounded">
            <div className="row border">
              <div className="col-md-6">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-100 text-gray-700 py-3 px-4 pr-8   focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={(e) => setbloodGroup(e.target.value)}
                  >
                    <option value="">--Please choose a blood group--</option>
                    <option value={"A+"}>A+</option>

                    <option value={"B+"}>B+</option>
                    <option value={"O+"}>O+</option>
                    <option value={"AB+"}>AB+</option>
                    <option value={"A-"}>A-</option>
                    <option value={"B-"}>B-</option>
                    <option value={"O-"}>O-</option>
                    <option value={"AB-"}>AB-</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      View
                      DetailsBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <div className="search-2">
                    <i className="bx bxs-map" />
                    <input
                      type="text"
                      placeholder="Location"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white mt-1 font-bold py-2 px-4 rounded-full"
                      onClick={handleClick}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donor with such blood group */}
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
        {show && (
          <>
            {group
              ? group.length === 0 && (
                  <h1 className="my-3 text-2xl text-center">No Result Found</h1>
                )
              : null}
          </>
        )}
        {group
          ? group.length !== 0 && (
              <>
                {" "}
                <div
                  className="mt-5"
                  style={{ width: "100%", overflowX: "scroll" }}
                >
                  <table className="table container">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Address</th>

                        <th scope="col">Last Donation</th>
                        <th scope="col">Diseases</th>
                        <th scope="col">Allergies</th>
                        <th scope="col">Cardiac</th>
                        <th scope="col">Bleeding</th>
                        <th scope="col">HHH</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group
                        ? group.map((value, index) => {
                            return (
                              <>
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>{value ? value.name : null}</td>
                                  <td>{value ? value.gender : null}</td>
                                  <td>{value ? value.bloodGroup : null}</td>

                                  <td>{value ? value.dateOfBirth : null}</td>

                                  <td>{value ? value.phoneNumber : null}</td>
                                  <td>{value ? value.email : null}</td>
                                  <td>{value ? value.occupation : null}</td>
                                  <td>{value ? value.address : null}</td>
                                  <td>{value ? value.lastDonation : null}</td>
                                  <td>{value ? value.disease : null}</td>
                                  <td>{value ? value.allergies : null}</td>
                                  <td>{value ? value.cardiac : null}</td>
                                  <td>{value ? value.bleeding : null}</td>
                                  <td>{value ? value.hhh : null}</td>
                                </tr>
                              </>
                            );
                          })
                        : null}
                    </tbody>
                  </table>
                </div>
              </>
            )
          : null}
      </div>
    </div>
  );
};

export default Search;
