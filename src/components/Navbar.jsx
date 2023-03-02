import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.png";
import { Image } from "react-bootstrap";
const Navbar = () => {
  const [user, setUser] = useState({});
  const { pathname } = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("blood")));
  }, [pathname]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ opacity: "1" }}
      >
        <div className="container-fluid">
          <div className="">
            <Image src={Logo} height={20} width={120} style={{marginTop:'-5px'}} />
          </div>{" "}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Hamburger />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ml-auto  mb-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item" style={{ margin: "0px auto" }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee " : "nav-link "
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee " : "nav-link "
                  }
                  to={"/donor-registration"}
                >
                  Donor Registration
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee " : "nav-link "
                  }
                  to={"/live-blood-camp"}
                >
                  Live Blood Camps
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee " : "nav-link "
                  }
                  to={"/search"}
                >
                  Search
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee " : "nav-link "
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link  activee " : "nav-link "
                  }
                  to={"/blood-request-form"}
                >
                  Blood Request
                </NavLink>
              </li>
              {user && (
                <li className="nav-item ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link  activee " : "nav-link "
                    }
                    to={"/dashboard"}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}

              {user ? (
                <li className="nav-item ">
                  <a
                    className="nav-link text-sm"
                    href={"/"}
                    onClick={() => localStorage.removeItem("blood")}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li className="nav-item ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link  activee " : "nav-link "
                    }
                    to={"/login"}
                  >
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
