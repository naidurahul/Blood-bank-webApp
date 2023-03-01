import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header p-2" style={{ width: "100%" }}>
        <Link
          to={"/blood-stock"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h1 className="p-2 bg-red-800 rounded">Blood Stock</h1>
        </Link>
        <Link to={"/donor"}>
          <h1
            className="p-2  bg-green-800 rounded"
            style={{ textDecoration: "none", color: "white" }}
          >
            Donor Reg's
          </h1>
        </Link>
        <Link to={"/camps"}>
          <h1
            className="p-2  bg-yellow-800 rounded"
            style={{ textDecoration: "none", color: "white" }}
          >
            Blood Camps
          </h1>
        </Link>
        <Link to={"/blood-request"}>
          <h1
            className="p-2  bg-blue-800 rounded"
            style={{ textDecoration: "none", color: "white" }}
          >
            Blood Request
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
