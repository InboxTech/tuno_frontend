import React, { useEffect, useState } from "react";
import HeaderBackgroundImg from "../assets/img/theme-img/header3-bg-shape.png";
import Logo from "../assets/img/logo2.svg";
import { Link } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const Header = () => {
  const {API} = useAuth()
  const [isSticky, setIsSticky] = useState(false);
  const { isLoggedIn } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300); // adjust value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //get service title in sub menu
  const getAllServices = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/api/admin/service/getService`,{method: "GET",});
      const data = await response.json();
      console.log("API response:", data);

      // If response is { services: [...] }
      // 👉 adjust this based on your API
      const serviceList = Array.isArray(data) ? data : data.services;

      setServices(serviceList); // ✅ Just titles needed
    } catch (error) {
      console.error("Services Error:", error);
      toast.error(error.message || "Error fetching services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <React.Fragment>
      <header
        className={`th-header header-layout2 ${isSticky ? "sticky-active" : ""
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

                          {loading ? (
                            <li className="text-center">Loading services...</li>
                          ) : services.length > 0 ? (
                            services.map((service) => {
                              console.log("service.title:", service.title)
                              return (
                                <li key={service._id}>
                                  <Link to="#">{service.title || "No Title"}</Link> {/* ✅ Only title shown */}
                                </li>
                              )
                            })
                          ) : (
                            <li className="text-center">No services found</li>
                          )}

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
                                <Link to="#">Shop</Link>
                              </li>
                              <li>
                                <Link to="#">Shop Details</Link>
                              </li>
                              <li>
                                <Link to="#">Cart Page</Link>
                              </li>
                              <li>
                                <Link to="3">Checkout</Link>
                              </li>
                              <li>
                                <Link to="#">Wishlist</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="#">Project</Link>
                          </li>
                          <li>
                            <Link to="#">
                              Project Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Our Team</Link>
                          </li>
                          <li>
                            <Link to="#">Team Details</Link>
                          </li>
                          <li>
                            <Link to="#">Chatbot Integration</Link>
                          </li>
                          <li>
                            <Link to="#">Pricing</Link>
                          </li>
                          <li>
                            <Link to="#">Testimonial</Link>
                          </li>
                          <li>
                            <Link to="#">FAQ'S Page</Link>
                          </li>
                          <li>
                            <Link to="#">AI Consulting</Link>
                          </li>

                        </ul>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                       <li>
                        <Link to="/career">Career</Link>
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
