import axios from "axios";
import React from "react";

const Edit = ({ value, render, setRender, setShow }) => {
  const handleEdit = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/update/${
          value ? value._id : null
        }/${true}`
      );
      console.log(data);
      setRender(!render);
      setShow(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit1 = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/update/${
          value ? value._id : null
        }/${false}`
      );
      console.log(data);
      setRender(!render);
      setShow(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <td>
        {" "}
        <h1
          className="p-2  bg-green-800 rounded text-center cursor-pointer"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          onClick={handleEdit}
        >
          Accept
        </h1>
        <h1
          className="p-2  bg-red-800 rounded text-center cursor-pointer mt-1"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          onClick={handleEdit1}
        >
          Reject
        </h1>
      </td>
      {value.isApproved ? (
        <h1 className="text-green-600 text-xl">Accepted</h1>
      ) : (
        <h1 className="text-red-600 text-xl">Rejected</h1>
      )}
    </>
  );
};

export default Edit;
