// components/Footer.jsx
import React from "react";
import footerBgShape from "../assets/img/shape/footer-bg-shape2.png";
import insta1 from "../assets/img/widget/insta-feed-1-1.jpg";
import insta2 from "../assets/img/widget/insta-feed-1-2.jpg";
import insta3 from "../assets/img/widget/insta-feed-1-3.jpg";
import insta4 from "../assets/img/widget/insta-feed-1-4.jpg";

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1 style2 bg-black space-top">
      <div className="shape-mockup footer-bg-shape1-1" data-left="50%" data-bottom="-50%">
        <img src={footerBgShape} alt="img" />
      </div>
      <div className="container">
        <div className="footer-top" data-aos="fade-up"  data-aos-duration="3000">
          <div className="shadow-text text-lg-center text-white" >
            Let’s Talk
          </div>
          <div className="row gy-30 justify-content-lg-between">
            <div className="col-lg-auto" >
              <div className="contact-info-card contact-location-info">
                <p className="box-title">Location</p>
                <h4 className="box-text">
                  56 Moo 9 Ladlumkaew-Pathumthani Rd., Pathum Thani 12140, Thailand
                </h4>
              </div>
            </div>
            <div className="col-lg-auto" >
              <div className="contact-info-card contact-phone-info">
                <p className="box-title">Phone Call</p>
                <h4 className="box-text">
                  <a href="tel:6624073460">+6624073460</a>
                </h4>
              </div>
            </div>
            <div className="col-lg-auto" >
              <div className="contact-info-card contact-mail-info">
                <p className="box-title">Email Address</p>
                <h4 className="box-text">
                  <a href="mailto:help24/7.info@robor.com">help24/7.info@robor.com</a>
                </h4>
                <h4 className="box-text">
                  <a href="mailto:info@robor.com">info@robor.com</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom" data-aos="fade-up"  data-aos-duration="3000">
          <div className="widget-area">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto" >
                <div className="widget th-newsletter-widget style2 footer-widget">
                  <h3 className="widget_title">Subscribe to Newsletter</h3>
                  <p className="footer-text mb-4">
                    Get Monthly insights from founders around the globe. No spam - promise.
                  </p>
                  <form className="newsletter-form">
                    <div className="form-group style-dark">
                      <input className="form-control" type="email" placeholder="Enter your email" required />
                    </div>
                    <button type="submit" className="th-btn style-gradient2">
                      Subscribe
                    </button>
                  </form>
                  <div className="th-social style10 mt-30">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-auto" >
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Links</h3>
                  <ul className="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="service.html">Features</a></li>
                    <li><a href="project.html">Projects</a></li>
                    <li><a href="blog.html">Blog</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-xl-auto" >
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Company</h3>
                  <ul className="menu">
                    <li><a href="about.html">What we Offer</a></li>
                    <li><a href="about.html">Our Story</a></li>
                    <li><a href="blog.html">Latest Posts</a></li>
                    <li><a href="contact.html">Help Center</a></li>
                    <li><a href="about.html">Our Partners</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-xl-auto" >
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Our Service</h3>
                  <ul className="menu">
                    <li><a href="service.html">Robotic Automation</a></li>
                    <li><a href="service.html">Education & Science</a></li>
                    <li><a href="service.html">Machine Learning</a></li>
                    <li><a href="service.html">Predictive Analysis</a></li>
                    <li><a href="service.html">Data Security</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-xl-auto" >
                <div className="widget th-widget-instagram footer-widget">
                  <h3 className="widget_title">Instagram</h3>
                  <div className="instagram-feeds">
                    {[insta1, insta2, insta3, insta4].map((img, i) => (
                      <div className="insta-thumb" key={i}>
                        <img src={img} alt={`Instagram ${i + 1}`} />
                        <a href={img} className="insta-btn popup-image">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="copyright-wrap bg-gradient" >
        <div className="container">
          <div className="row gy-2">
            <div className="col-lg-6" >
              <p className="copyright-text">
                Copyright 2025 <a href="index.html">Tuno.</a> All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end" >
              <div className="footer-links">
                <ul>
                  <li><a href="about.html">Privacy Policy</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="about.html">Terms and Conditions.</a></li>
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
