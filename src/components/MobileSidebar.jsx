import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo2.svg";
import { useAuth } from "../store/auth";

function MobileSidebar() {
  const [show, setShow] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const { projectItems, services, loading } = useAuth();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setOpenMenus({});
  };

  const toggleMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="th-menu-toggle icon-btn"
      >
        <i className="far fa-bars" />
      </button>

      <Offcanvas
        className="mobileSidebar"
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <Offcanvas.Body>
          <div className="th-menu-area text-center">
            <button onClick={handleClose} className="th-menu-toggle-btn">
              <i className="fal fa-times" />
            </button>
            <div className="mobile-logo mb-4">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>

            <div className="th-mobile-menu">
              <ul className="mobile-menu-list">
                {/* Home */}
                <li>
                  <Link to="/">Home</Link>
                </li>

                {/* About */}
                <li>
                  <Link to="/about">About Us</Link>
                </li>

                {/* Services */}
                <li
                  className={`menu-item-has-children ${
                    openMenus.services ? "open" : ""
                  }`}
                >
                  <Link to="/service" onClick={() => toggleMenu("services")}>
                    Services
                  </Link>
                  {openMenus.services && (
                    <ul className="sub-menu">
                      {/* <li>
                        <Link to="/service">Services</Link>
                      </li> */}
                       {loading ? (
                                                  <li className="text-center">Loading services...</li>
                                                ) : services.length > 0 ? (
                                                  services.map((service) => {
                                                    console.log("service.title:", service.title)
                                                    return (
                                                      <li key={service._id}>
                                                        <Link to={`/service-details/${service._id}`}>{service.title || "No Title"}</Link> {/*  Only title shown */}
                                                      </li>
                                                    )
                                                  })
                                                ) : (
                                                  <li className="text-center">No services found</li>
                                                )}
                      {/* <li>
                        <Link to="/service-details">Service Details</Link>
                      </li> */}
                    </ul>
                  )}
                </li>

                {/* Projects */}
                <li
                  className={`menu-item-has-children ${
                    openMenus.pages ? "open" : ""
                  }`}
                >
                  <Link to="#" onClick={() => toggleMenu("pages")}>
                    Projects
                  </Link>
                  {openMenus.pages && (
                    <ul className="sub-menu">
                      {projectItems?.map((p) => (
                        <li>
                          <Link to={`/project/${p._id}`}>{p.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Blog */}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="#">Career</Link>
                </li>

                {/* Contact */}
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSidebar;
