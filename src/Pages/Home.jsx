import Hamburger from "hamburger-react";
import React from "react";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import CoverVideo from "../assets/Cover.mp4";
import Logo from "../assets/Logo.png";
import { SideNav } from "../common/SideNav";

const Home = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleClose = () => setOpenSideBar(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
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
          <source src={CoverVideo} type="video/mp4" />
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
              {!openSideBar && (
                <Hamburger
                  size={50}
                  toggled={openSideBar}
                  onToggle={handleOpenSideBar}
                />
              )}
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
      <SideNav openSideBar={openSideBar} handleClose={handleClose} />
    </>
  );
};

export default Home;
