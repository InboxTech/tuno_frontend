import React, { useEffect, useState } from "react";
import HeaderBackgroundImg from "../assets/img/theme-img/header3-bg-shape.png";
import Logo from "../assets/img/logo2.svg";
import { Link } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useAuth } from "../store/auth";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300); // adjust value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <React.Fragment>
      <header
        className={`th-header header-layout2 ${
          isSticky ? "sticky-active" : ""
        }`}
      >
        <div className="sticky-wrapper">
          <div className="container">
            <div className={`menu-area ${isSticky ? "sricky-active" : ""}`}>
              <div
                className="header-bg-shape"
                data-mask-src={HeaderBackgroundImg}
              />
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={Logo} alt="Robor" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="">
                        <Link to="/">Home </Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/service">Services</Link>
                          </li>
                          <li>
                            <Link to="/service-details">Services Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <Link to="#">Shop</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="shop.html">Shop</Link>
                              </li>
                              <li>
                                <Link to="shop-details.html">Shop Details</Link>
                              </li>
                              <li>
                                <Link to="cart.html">Cart Page</Link>
                              </li>
                              <li>
                                <Link to="checkout.html">Checkout</Link>
                              </li>
                              <li>
                                <Link to="wishlist.html">Wishlist</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="project.html">Project</Link>
                          </li>
                          <li>
                            <Link to="project-details.html">
                              Project Details
                            </Link>
                          </li>
                          <li>
                            <Link to="team.html">Our Team</Link>
                          </li>
                          <li>
                            <Link to="team-details.html">Team Details</Link>
                          </li>
                          <li>
                            <Link to="chatbot.html">Chatbot Integration</Link>
                          </li>
                          <li>
                            <Link to="pricing.html">Pricing</Link>
                          </li>
                          <li>
                            <Link to="testimonial.html">Testimonial</Link>
                          </li>
                          <li>
                            <Link to="faq.html">FAQ'S Page</Link>
                          </li>
                          <li>
                            <Link to="ai-consulting.html">AI Consulting</Link>
                          </li>
                          <li>
                            <Link to="error.html">Error Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                        {/* <ul className="sub-menu">
                          <li>
                            <Link to="blog.html">Blog Standard</Link>
                          </li>
                          <li>
                            <Link to="blog-2.html">Blog Grid</Link>
                          </li>
                          <li>
                            <Link to="blog-details.html">Blog Details</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    
                    </ul>
                  </nav>
                  <div className="header-button d-flex d-lg-none">
                    <div className="sidebar-btn">
                      <MobileSidebar />
                    </div>
                  </div>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                   
                     {isLoggedIn ? (
                       
                          <Link to="/logout" className="th-btn style-gradient">Logout <i className="far fa-long-arrow-right ms-2"> </i>
                          </Link>

                        
                      ) : (
                       <div>
                          <Link to="/login" className="th-btn style-gradient">Login
                      <i className="far fa-long-arrow-right ms-2"> </i>
                          
                          </Link>
                        

                      </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
