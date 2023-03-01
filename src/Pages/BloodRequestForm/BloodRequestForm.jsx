import axios from "axios";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const BloodRequestForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || address === "" || phoneNumber === "") {
      setError(true);
      window.scrollTo(0, 0);
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/request",
          { name, gender, bloodGroup, address, phoneNumber, email }
        );
        console.log(data);
        setShow(true);
        window.scroll(0, 0);
        setName("");
        setAddress("");
        setEmail("");
        setPhoneNumber("");
        setError(false);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      {show && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Your Request Has Been Successfully Posted.</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          />
        </div>
      )}
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Fields Cannot Be Empty.</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setError(false)}
          />
        </div>
      )}
      <div className="container-fluid mt-4">
        <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
          <span className="font-bold text-red-600">
            <Typewriter
              options={{
                strings: ["Blood Request Registration Form"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <div className="row">
          <div className="col-md-7">
            <img
              src="https://previews.123rf.com/images/branche/branche1312/branche131200013/24355374-blood-donation.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
          <div style={{}} className="col-md-5">
            <h1 className="mb-4 mt-5 font-bold text-lg ">
              Fill all the details
            </h1>
            <div className="mb-4">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                      style={{ color: "gray" }}
                    >
                      Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="grid-first-name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="w-full md:w-2/2 px-3  md:mb-0 mt-2">
                    <label
                      className="block text-white-700 text-sm font-bold mb-2"
                      htmlFor="Weight"
                      style={{ color: "gray" }}
                    >
                      Gender<span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full md:w-2/2 px-3 mb-10 md:mb-0"
                    style={{ margin: "10px 0px" }}
                  >
                    {" "}
                    <label
                      className="block text-white-700 text-sm font-bold mb-2"
                      htmlFor="Weight"
                      style={{ color: "gray" }}
                    >
                      Contact Number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Contact Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div
                    className="w-full md:w-2/2 px-3 mb-10 md:mb-0"
                    style={{ margin: "10px 0px" }}
                  >
                    {" "}
                    <label
                      className="block text-white-700 text-sm font-bold mb-2"
                      htmlFor="Weight"
                      style={{ color: "gray" }}
                    >
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="w-full md:w-2/2 px-3  md:mb-0">
                    <label
                      className="block text-white-700 text-sm font-bold mb-2"
                      htmlFor="Weight"
                      style={{ color: "gray" }}
                    >
                      Blood Group<span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        onChange={(e) => setBloodGroup(e.target.value)}
                      >
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
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full md:w-2/2 px-3 mb-6 md:mb-0"
                    style={{ margin: "10px 0px" }}
                  >
                    {" "}
                    <label
                      className="block text-white-700 text-sm font-bold mb-2"
                      htmlFor="Weight"
                      style={{ color: "gray" }}
                    >
                      Address <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleClick}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodRequestForm;
