import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { SideNav } from "../SideNav";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [user, setUser] = useState({});
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleClose = () => setOpenSideBar(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const { pathname } = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("blood")));
  }, [pathname]);
  return (
    <>
      <div className="headder">
        <div className="d-flex bg-light m-0 h-100 justify-content-between">
          <div>
            <Image src={Logo} width={150} className="ml-5 mt-1" />
          </div>
          <div>
            <List
              size={40}
              className="hover mt-4 mr-5"
              onClick={handleOpenSideBar}
            />
          </div>
        </div>
      </div>{" "}
      <SideNav openSideBar={openSideBar} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
