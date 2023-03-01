import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";

const Delete = ({ id, setShow, refresh, setRefresh }) => {
  const { pathname } = useLocation();
  const handleClick = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/${
          pathname === "/live-blood-camp" ? "hospitals" : "donations"
        }/${id}`
      );
      console.log(data);
      setShow(true);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Delete;
