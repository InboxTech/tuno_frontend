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
              <Link to="index.html">
                <img src={Logo}alt="Logo" />
              </Link>
            </div>

            <div className="th-mobile-menu">
              <ul className="mobile-menu-list">
                {/* Home */}
                <li className={`menu-item-has-children ${openMenus.home ? "open" : ""}`}>
                  <Link to="#" onClick={() => toggleMenu("home")}>Home</Link>
                  {openMenus.home && (
                    <ul className="sub-menu">
                      <li className={`menu-item-has-children ${openMenus.multipage ? "open" : ""}`}>
                        <Link to="#" onClick={() => toggleMenu("multipage")}>Multipage</Link>
                        {openMenus.multipage && (
                          <ul className="sub-menu">
                            <li><Link to="index.html">Home I (AI Startup)</Link></li>
                            <li><Link to="home-2.html">Home II (AI Technology)</Link></li>
                            <li><Link to="home-3.html">Home III (AI Agency)</Link></li>
                          </ul>
                        )}
                      </li>
                      <li className={`menu-item-has-children ${openMenus.onepage ? "open" : ""}`}>
                        <Link to="#" onClick={() => toggleMenu("onepage")}>Onepage</Link>
                        {openMenus.onepage && (
                          <ul className="sub-menu">
                            <li><Link to="home-1-op.html">Home I (AI Startup)</Link></li>
                            <li><Link to="home-2-op.html">Home II (AI Technology)</Link></li>
                            <li><Link to="home-3-op.html">Home III (AI Agency)</Link></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

                {/* About */}
                <li><Link to="about.html">About Us</Link></li>

                {/* Services */}
                <li className={`menu-item-has-children ${openMenus.services ? "open" : ""}`}>
                  <Link to="#" onClick={() => toggleMenu("services")}>Services</Link>
                  {openMenus.services && (
                    <ul className="sub-menu">
                      <li><Link to="service.html">Services</Link></li>
                      <li><Link to="service-details.html">Service Details</Link></li>
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
                            <li><Link to="shop.html">Shop</Link></li>
                            <li><Link to="shop-details.html">Shop Details</Link></li>
                            <li><Link to="cart.html">Cart Page</Link></li>
                            <li><Link to="checkout.html">Checkout</Link></li>
                            <li><Link to="wishlist.html">Wishlist</Link></li>
                          </ul>
                        )}
                      </li>
                      <li><Link to="project.html">Project</Link></li>
                      <li><Link to="project-details.html">Project Details</Link></li>
                      <li><Link to="team.html">Our Team</Link></li>
                      <li><Link to="team-details.html">Team Details</Link></li>
                      <li><Link to="chatbot.html">Chatbot Integration</Link></li>
                      <li><Link to="pricing.html">Pricing</Link></li>
                      <li><Link to="testimonial.html">Testimonial</Link></li>
                      <li><Link to="faq.html">FAQ'S Page</Link></li>
                      <li><Link to="ai-consulting.html">AI Consulting</Link></li>
                      <li><Link to="error.html">Error Page</Link></li>
                    </ul>
                  )}
                </li>

                {/* Blog */}
                <li className={`menu-item-has-children ${openMenus.blog ? "open" : ""}`}>
                  <Link to="#" onClick={() => toggleMenu("blog")}>Blog</Link>
                  {openMenus.blog && (
                    <ul className="sub-menu">
                      <li><Link to="blog.html">Blog Standard</Link></li>
                      <li><Link to="blog-2.html">Blog Grid</Link></li>
                      <li><Link to="blog-details.html">Blog Details</Link></li>
                    </ul>
                  )}
                </li>

                {/* Contact */}
                <li><Link to="contact.html">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSidebar;
