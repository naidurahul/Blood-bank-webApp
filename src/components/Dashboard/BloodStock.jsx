import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const BloodStock = () => {
  const [aplus, setAPlus] = useState(0);
  const [bplus, setBPlus] = useState(0);
  const [Oplus, setOPlus] = useState(0);
  const [abplus, setABPlus] = useState(0);
  const [aminus, setAMinus] = useState(0);
  const [bminus, setBMinus] = useState(0);
  const [ominus, setOMinus] = useState(0);
  const [abminus, setABMinus] = useState(0);
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState("A+");
  const [amount, setAmount] = useState(0);
  const [render, setRender] = useState(false);

  const handleClicks = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/stock", {
        bg,
        amount,
      });
      setRender(!render);
      window.scrollTo(0, 0);
      console.log(data);
      setAmount(0);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data2 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"A+"}`
        );
        console.log(data2);

        setAPlus(
          data2.data.msg
            ? data2.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        console.log(aplus);

        const data1 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"B+"}`
        );

        setBPlus(
          data1.data.msg
            ? data1.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        const data3 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"O+"}`
        );
        setOPlus(
          data3.data.msg
            ? data3.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        const data4 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"AB+"}`
        );
        setABPlus(
          data4.data.msg
            ? data4.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        const data5 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"A-"}`
        );
        setAMinus(
          data5.data.msg
            ? data5.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        const data6 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"B-"}`
        );
        setBMinus(
          data6.data.msg
            ? data6.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        const data7 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"O-"}`
        );
        setOMinus(
          data7.data.msg
            ? data7.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        const data8 = await axios.get(
          `http://localhost:4000/api/v1/stock/${"AB-"}`
        );
        setABMinus(
          data8.data.msg
            ? data8.data.msg.reduce((a, b) => {
                return a + parseInt(b.amount);
              }, 0)
            : null
        );
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [render]);
  console.log(aplus);
  return (
    <>
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
          <section className="text-gray-600 body-font">
            <div className="container px-5  mx-auto">
              <div className="flex flex-wrap justify-items-center  -m-1">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block bg-gray-300 relative h-48 rounded overflow-hidden no-underline">
                    <h2 className="text-3xl font-bold text-red-600 mt-5 text-center">
                      A+
                    </h2>

                    {aplus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 text-center">
                          Unit Available:
                          {aplus ? aplus : null}
                        </h2>
                      </>
                    ) : (
                      <h1 className="text-center">No Units Available</h1>
                    )}
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded bg-gray-300 overflow-hidden text-center">
                    <h2 className="text-3xl font-bold text-red-600 mt-5">B+</h2>
                    {bplus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 ">
                          Unit Available: {bplus ? bplus : null}
                        </h2>
                      </>
                    ) : (
                      "No Units Available"
                    )}
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded bg-gray-300 overflow-hidden text-center">
                    <h2 className="text-3xl font-bold text-red-600 mt-5">O+</h2>

                    {Oplus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 ">
                          Unit Available: {Oplus ? Oplus : null}
                        </h2>
                      </>
                    ) : (
                      "No Units Available"
                    )}
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded bg-gray-300 overflow-hidden text-center">
                    <h2 className="text-3xl font-bold text-red-600 mt-5">
                      AB+
                    </h2>
                    {abplus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 ">
                          Unit Available: {abplus ? abplus : null}
                        </h2>
                      </>
                    ) : (
                      "No Units Available"
                    )}
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded bg-gray-300 overflow-hidden text-center">
                    <h2 className="text-3xl font-bold text-red-600 mt-5">A-</h2>
                    {aminus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 ">
                          Unit Available: {aminus ? aminus : null}
                        </h2>
                      </>
                    ) : (
                      "No Units Available"
                    )}
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded bg-gray-300 overflow-hidden text-center">
                    <h2 className="text-3xl font-bold text-red-600 mt-5">B-</h2>
                    {bminus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 ">
                          Unit Available: {bminus ? bminus : null}
                        </h2>
                      </>
                    ) : (
                      "No Units Available"
                    )}
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded bg-gray-300 overflow-hidden text-center">
                    <h2 className="text-3xl font-bold text-red-600 mt-5">O-</h2>
                    {ominus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 ">
                          Unit Available: {ominus ? ominus : null}
                        </h2>
                      </>
                    ) : (
                      "No Units Available"
                    )}
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded bg-gray-300 overflow-hidden text-center">
                    <h2 className="text-3xl font-bold text-red-600 mt-5">
                      AB-
                    </h2>
                    {abminus !== 0 ? (
                      <>
                        <h2 className="text-base font-semibold text-green-600 ">
                          Unit Available: {abminus ? abminus : null}
                        </h2>
                      </>
                    ) : (
                      "No Units Available"
                    )}
                  </a>
                </div>
              </div>
              <div className="p-2">
                <div className="block relative h-18 rounded bg-black overflow-hidden text-center p-1">
                  <h2 className="text-3xl font-bold text-white  ">
                    Total :{" "}
                    {aplus +
                      bplus +
                      abplus +
                      Oplus +
                      aminus +
                      bminus +
                      ominus +
                      abminus}{" "}
                    units
                  </h2>
                </div>
              </div>{" "}
            </div>
          </section>

          <section className>
            <div className=" items-center px-5 py-2 lg:px-20">
              <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
                <div className="mt-1">
                  <div className="mt-1">
                    <form className="space-y-6">
                      <div>
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
                            onChange={(e) => setBg(e.target.value)}
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
                      <div className="space-y-1">
                        <label
                          className="block text-white-700 text-sm font-bold mb-2"
                          htmlFor="Weight"
                          style={{ color: "gray" }}
                        >
                          Unit<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            required
                            placeholder="eg. 1,2,3"
                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          style={{ backgroundColor: "#C53030" }}
                          onClick={handleClicks}
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BloodStock;
