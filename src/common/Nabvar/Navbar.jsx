import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";
import { SideNav } from "../SideNav";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { navBarLinks } from "../../global/constants";
const Navbar = () => {
  const [user, setUser] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleClose = () => setOpenSideBar(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const { pathname } = useLocation();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenWidth, "screenWidth");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("blood")));
  }, [pathname]);
  return (
    <>
      <div className="header-lg">
        {screenWidth >= 850 ? (
          <div className="d-flex  m-0 mx-2 h-100 justify-content-between">
            <div>
              <Image src={Logo} width={100} className="mt-1" />
            </div>{" "}
            <div className="d-flex align-items-center ">
              {navBarLinks.map((link) => {
                return (
                  <NavLink
                    to={link.link}
                    className="text-decoration-none text-white"
                  >
                    <h6
                      className="mx-2 xlarge hover"
                      style={{ fontWeight: 300 }}
                    >
                      {link.label}
                    </h6>
                  </NavLink>
                );
              })}
            </div>
            <div className="d-flex align-items-center "></div>
          </div>
        ) : (
          <div className="d-flex header-lg m-0 h-100 justify-content-between">
            <div>
              <Image src={Logo} width={100} className="ml-5 mt-1" />
            </div>
            <div>
              <List
                size={40}
                className="hover text-white mt-4 mr-5"
                onClick={handleOpenSideBar}
              />
            </div>
          </div>
        )}
      </div>{" "}
      <SideNav openSideBar={openSideBar} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
