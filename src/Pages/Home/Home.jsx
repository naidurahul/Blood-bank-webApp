import Hamburger from "hamburger-react";
import React from "react";
import { useState } from "react";
import { Button, Image, Offcanvas } from "react-bootstrap";
import video from "./Cover.mp4";
import Logo from "./Logo.png";

const SideNav = ({ show, handleClose }) => {
  console.log(show, "lasdasdas");
  return (
    <Offcanvas show={show} onHide={handleClose} style={{}}>
      <Offcanvas.Header closeButton className="bg-primary">
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-dark">
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="position-relative">
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            zIndex: 0,
            objectFit: "cover",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          className="position-absolute w-100"
          style={{ zIndex: 2, top: "5vh" }}
        >
          <div className="d-flex justify-content-between mx-5">
            <div>
              <Image src={Logo} width={200} />
            </div>
            <div>
              <Hamburger size={50} onToggle={handleShow} />
            </div>
          </div>
        </div>

        <div
          className="position-absolute w-100"
          style={{ zIndex: 2, top: "90vh" }}
        >
          <div className="d-flex justify-content-between mx-5">
            <div>
              <Button variant="primary px-5 py-2">Donate</Button>{" "}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <SideNav show={show} handleClose={handleClose} />
    </>
  );
};

export default Home;
