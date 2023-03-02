import React from "react";
import video from "./Cover.mp4";
const Carousel = () => {
  return (
    <div className="bg-primary-light" style={{ height: "90vh" }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "90vh",
          left: "50%",
          top: "50%",
          zIndex: "100",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <h4 className="bg-primary">hiii</h4>
    </div>
  );
};

export default Carousel;
