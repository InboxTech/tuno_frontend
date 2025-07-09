import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo2.svg";

function MobileSidebar() {
  const [show, setShow] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

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

      <Offcanvas className="mobileSidebar" show={show} onHide={handleClose} placement="start">
        <Offcanvas.Body>
          <div className="th-menu-area text-center">
            <button onClick={handleClose} className="th-menu-toggle-btn">
              <i className="fal fa-times" />
            </button>
            <div className="mobile-logo mb-4">
              <Link to="/">
                <img src={Logo}alt="Logo" />
              </Link>
            </div>

            <div className="th-mobile-menu">
              <ul className="mobile-menu-list">
                {/* Home */}
                <li className={`menu-item-has-children ${openMenus.home ? "open" : ""}`}>
                  <Link to="/"
                  //  onClick={() => toggleMenu("home")}
                   >
                    Home</Link>
              
                </li>

                {/* About */}
                <li><Link to="/about">About Us</Link></li>

                {/* Services */}
                <li className={`menu-item-has-children ${openMenus.services ? "open" : ""}`}>
                  <Link to="#" onClick={() => toggleMenu("services")}>Services</Link>
                  {openMenus.services && (
                    <ul className="sub-menu">
                      <li><Link to="/service">Services</Link></li>
                      <li><Link to="/service-details">Service Details</Link></li>
                    </ul>
                  )}
                </li>

                {/* Pages */}
                <li className={`menu-item-has-children ${openMenus.pages ? "open" : ""}`}>
                  <Link to="#" onClick={() => toggleMenu("pages")}>Pages</Link>
                  {openMenus.pages && (
                    <ul className="sub-menu">
                      <li className={`menu-item-has-children ${openMenus.shop ? "open" : ""}`}>
                        <Link to="#" onClick={() => toggleMenu("shop")}>Shop</Link>
                        {openMenus.shop && (
                          <ul className="sub-menu">
                            <li><Link to="#">Shop</Link></li>
                            <li><Link to="#">Shop Details</Link></li>
                            <li><Link to="#">Cart Page</Link></li>
                            <li><Link to="#">Checkout</Link></li>
                            <li><Link to="#">Wishlist</Link></li>
                          </ul>
                        )}
                      </li>
                      <li><Link to="#">Project</Link></li>
                      <li><Link to="#">Project Details</Link></li>
                      <li><Link to="#">Our Team</Link></li>
                      <li><Link to="#">Team Details</Link></li>
                      <li><Link to="#">Chatbot Integration</Link></li>
                      <li><Link to="#">Pricing</Link></li>
                      <li><Link to="#">Testimonial</Link></li>
                      <li><Link to="3">FAQ'S Page</Link></li>
                      <li><Link to="#">AI Consulting</Link></li>
                   
                    </ul>
                  )}
                </li>

                {/* Blog */}
                <li className={`menu-item-has-children ${openMenus.blog ? "open" : ""}`}>
                  <Link to="/blog"
                  //  onClick={() => toggleMenu("blog")}
                   >Blog</Link>
                
                </li>

                {/* Contact */}
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSidebar;
