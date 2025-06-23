import React, { useEffect, useState } from "react";
import HeaderBackgroundImg from "../assets/img/theme-img/header3-bg-shape.png"
import Logo from "../assets/img/logo2.svg"



const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300); // adjust value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <React.Fragment>
      <header className={`th-header header-layout2 ${isSticky ? "sticky-active" : ""}`}>
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
                    <a href="index.html">
                      <img src={Logo} alt="Robor" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="">
                        <a href="index.html">Home </a>
                     
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="project.html">Project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                          <li>
                            <a href="team.html">Our Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="chatbot.html">Chatbot Integration</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ'S Page</a>
                          </li>
                          <li>
                            <a href="ai-consulting.html">AI Consulting</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-2.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-button d-flex d-lg-none">
                    <div className="sidebar-btn">
                      <button type="button" className="th-menu-toggle icon-btn">
                        <i className="far fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <a href="contact.html" className="th-btn style-gradient">
                      Get Started Now{" "}
                      <i className="far fa-long-arrow-right ms-2" > </i>
                    </a>
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
