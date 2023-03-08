import { Image, NavLink, Offcanvas } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { sidebarLinks } from "../global/constants";

export const SideNav = ({ openSideBar, handleClose }) => {
  const { pathname } = useLocation();
  return (
    <Offcanvas show={openSideBar} onHide={handleClose} style={{}}>
      <Offcanvas.Body className="bg-light text-dark">
        <div className="d-flex justify-content-between">
          <div>
            <Image src={Logo} width={150} />
          </div>
          <div>
            <XLg size={40} className="hover mt-4" onClick={handleClose} />
          </div>
        </div>
        <div className="text-center pt-3">
          {sidebarLinks.map((link) => {
            return (
              <NavLink key={link.link} href={link.link}>
                <div className="d-flex justify-content-center ">
                  <h6
                    className="xxxlarge hover my-2"
                    style={{
                      fontWeight: 400,
                      borderBottom:
                        pathname === link.link && "2px solid #691a1a",
                    }}
                  >
                    {link.label}
                  </h6>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
