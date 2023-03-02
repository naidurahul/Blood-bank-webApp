import React from "react";

const HeaderWithUnderline = ({ text, id }) => {
  return (
    <>
      <h5 id={id} className="mb-1 text-center">
        <b>{text}</b>
      </h5>
      <hr
        style={{ height: 2, width: "10%" }}
        className="bg-primary rounded my-2"
      />
    </>
  );
};

export default HeaderWithUnderline;
