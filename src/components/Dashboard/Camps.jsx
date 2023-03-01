import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Camps = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cName, setcName] = useState("");
  const [sDate, setsDate] = useState("");
  const [eDate, seteDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      address !== "" &&
      cName !== "" &&
      sDate !== "" &&
      eDate !== ""
    ) {
      try {
        setLoading(true);
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/hospital",
          { name, address, cName, sDate, eDate }
        );
        console.log(data);
        setShow(true);
        setName("");
        setAddress("");
        setcName("");
        setsDate("");
        seteDate("");
        setLoading(false);
        window.scrollTo(0, 0);
        setError(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    } else {
      setError(true);
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      {show && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Congratulations</strong> Blood Camp IS Successfully Posted.
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
      <h1 className="text-4xl text-center my-2" style={{ color: "#975A16" }}>
        Blood Camps
      </h1>
      <section className>
        <div className=" items-center px-5  lg:px-20">
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-0">
              <div className="mt-0">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Venue{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        required
                        placeholder="Venue"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        required
                        placeholder="  Address"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Camp Name{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="text"
                        autoComplete="current-password"
                        required
                        placeholder="Camp Name"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        value={cName}
                        onChange={(e) => setcName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Start Date{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="date"
                        autoComplete="current-password"
                        required
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        value={sDate}
                        onChange={(e) => setsDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      End Date{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="date"
                        autoComplete="current-password"
                        required
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        value={eDate}
                        onChange={(e) => seteDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={handleClick}
                      style={{ backgroundColor: "#C53030" }}
                    >
                      Post
                    </button>
                    {loading && (
                      <div
                        className="spinner-border mx-auto my-3"
                        role="status"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Camps;
