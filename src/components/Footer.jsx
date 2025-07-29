// components/Footer.jsx
import React, { useState } from "react";
import footerBgShape from "../assets/img/shape/footer-bg-shape2.png";
import insta1 from "../assets/img/widget/insta-feed-1-1.jpg";
import insta2 from "../assets/img/widget/insta-feed-1-2.jpg";
import insta3 from "../assets/img/widget/insta-feed-1-3.jpg";
import insta4 from "../assets/img/widget/insta-feed-1-4.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { API, services, loading } = useAuth();


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const res = await axios.post(`${API}/api/subscribeData/subscribe`, {
      email,
    });

    if (res.status === 200) {
      toast.success("Subscribed successfully!");
      setEmail("");
    }
  } catch (error) {
    if (error.response?.status === 409) {
      toast.warning("You have already subscribed.");
    } else {
      toast.error("Failed to subscribe");
    }
    console.error("Subscribe error:", error);
  }
};


return (
  <footer className="footer-wrapper footer-layout1 style2 bg-black space-top">
    <div
      className="shape-mockup footer-bg-shape1-1"
      data-left="50%"
      data-bottom="-50%"
    >
      <img src={footerBgShape} alt="img" />
    </div>
    <div className="container">
      <div className="footer-top" data-aos="fade-up" data-aos-duration="2000">
        <div className="shadow-text text-lg-center text-white">
          Let’s Talk
        </div>
        <div className="row gy-30 justify-content-lg-between">
          <div className="col-lg-auto">
            <div className="contact-info-card contact-location-info">
              <p className="box-title">Location</p>
              <h4 className="box-text">
                56 Moo 9 Ladlumkaew-Pathumthani Rd., Pathum Thani 12140,
                Thailand
              </h4>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="contact-info-card contact-phone-info">
              <p className="box-title">Phone Call</p>
              <h4 className="box-text">
                <Link to="tel:6624073460">+6624073460</Link>
              </h4>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="contact-info-card contact-mail-info">
              <p className="box-title">Email Address</p>
              <h4 className="box-text">
                <Link to="mailto:help24/7.info@robor.com">
                  help24/7.info@robor.com
                </Link>
              </h4>
              <h4 className="box-text">
                <Link to="mailto:info@robor.com">info@robor.com</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-bottom"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget th-newsletter-widget style2 footer-widget">
                <h3 className="widget_title">Subscribe to Newsletter</h3>
                <p className="footer-text mb-4">
                  Get Monthly insights from founders around the globe. No spam
                  - promise.
                </p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <div className="form-group style-dark">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="th-btn style-gradient2">
                    Subscribe
                  </button>
                </form>
                <div className="th-social style10 mt-30">
                  <Link to="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <ul className="menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/project">Projects</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <ul className="menu">
                  <li>
                    <Link to="/about">What we Offer</Link>
                  </li>
                  <li>
                    <Link to="/about">Our Story</Link>
                  </li>
                  <li>
                    <Link to="/blog">Latest Posts</Link>
                  </li>
                  <li>
                    <Link to="/contact">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/about">Our Partners</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Service</h3>
                <ul className="menu">
                  {loading ? (
                    <li className="text-center">Loading services...</li>
                  ) : services.length > 0 ? (
                    services.slice(0, 5).map((service) => {
                      console.log("service.title:", service.title)
                      return (
                        <li key={service._id}>
                          <Link to={`/service-details/${service._id}`}>{service.title || "No Title"}</Link> {/* ✅ Only title shown */}
                        </li>
                      )
                    })
                  ) : (
                    <li className="text-center">No services found</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget th-widget-instagram footer-widget">
                <h3 className="widget_title">Instagram</h3>
                <div className="instagram-feeds">
                  {[insta1, insta2, insta3, insta4].map((img, i) => (
                    <div className="insta-thumb" key={i}>
                      <img src={img} alt={`Instagram ${i + 1}`} />
                      <Link to={img} className="insta-btn popup-image">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright-wrap bg-gradient">
      <div className="container">
        <div className="row gy-2">
          <div className="col-lg-6">
            <p className="copyright-text">
              Copyright 2025 <Link to="#">Tuno.</Link> All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <div className="footer-links">
              <ul>
                <li>
                  <Link to="/about">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">Terms and Conditions.</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;
