import React from "react";
import consultingThumb1_1 from "../assets/img/normal/consulting-thumb1-1.jpg"

const Contact = () => {
  return (
    <React.Fragment>
      {/* conatact Info  ====> */}

      <div
        className="space overflow-hidden contact-area-1 position-relative z-index-common"
        id="contact-sec"
      >
        <div className="container">
          <div className="row gy-40 justify-content-center">
            <div className="col-xl-12">
              <div className="title-area mb-0 text-center">
                <span className="sub-title2 text-anim text-theme text-uppercase mb-30">
                  Quick contact info
                </span>
                <h2 className="sec-title text-anim2">Contact Information</h2>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4 className="box-title">Location</h4>
                <p className="box-text">
                  Aai Saheb Housing Society, Sawant Bangla, 412308, Pakisthan
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-envelope" />
                </div>
                <h4 className="box-title">Email us</h4>
                <p className="box-text">
                  <a href="mailto:help24/7.info@robor.com">
                    help24/7.info@robor.com
                  </a>
                  <a href="mailto:info@robor.com">info@robor.com</a>
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-phone" />
                </div>
                <h4 className="box-title">Free Call</h4>
                <p className="box-text">
                  <a href="tel:+919175513773">+919 (175) 513 663</a>
                  <a href="tel:+919175513773">+919 (175) 513 773</a>
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info">
                <div className="box-icon">
                  <i className="fal fa-clock" />
                </div>
                <h4 className="box-title">Opening hour</h4>
                <p className="box-text">
                  Mon to Fri: 09AM - 05PM Saturday &amp; Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form ===> */}
      <div
        className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common"
        id="contact-sec"
      >
        <div className="container">
          <div className="consulting-wrap1 bg-smoke">
            <div className="row align-items-center">
              <div className="col-xxl-6">
                <div className="page-img mb-0">
                  <img
                    src={consultingThumb1_1}
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="consulting-form-wrap1">
                  <div className="title-area mb-20">
                    <h2 className="sec-title">Get In Touch!</h2>
                  </div>
                  <div className="contact-form-v1">
                    <form
                     
                      className="contact-form ajax-contact"
                    >
                      <div className="row">
                        <div className="form-group style-border col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Your name"
                          />
                          <i className="far fa-user" />
                        </div>
                        <div className="form-group style-border col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                          />
                          <i className="far fa-envelope" />
                        </div>
                        <div className="form-group style-border col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            name="number"
                            id="number"
                            placeholder="Phone Number"
                          />
                          <i className="far fa-phone" />
                        </div>
                        <div className="form-group style-border col-md-6">
                          <select
                            name="subject"
                            id="subject"
                            className="form-select bg-white"
                          >
                            <option
                              value
                              disabled="disabled"
                              selected="selected"
                              hidden
                            >
                              Select Subject
                            </option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="Brand Marketing">
                              Brand Marketing
                            </option>
                            <option value="UI/UX Designing">
                              UI/UX Designing
                            </option>
                            <option value="Digital Marketing">
                              Digital Marketing
                            </option>
                          </select>
                        </div>
                        <div className="form-group style-border col-12">
                          <input
                            type="number"
                            className="form-control"
                            name="number"
                            id="number"
                            placeholder="Company name"
                          />
                          <i className="far fa-circle-info" />
                        </div>
                        <div className="form-group style-border col-12">
                          <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={3}
                            className="form-control"
                            placeholder="How can we help you? feel free to get in touch!*"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-btn col-12">
                          <button className="th-btn style5">
                            Submit Message
                          </button>
                        </div>
                      </div>
                      <p className="form-messages mb-0 mt-3" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
