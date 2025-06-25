import React from "react";
import wave1 from "../assets/img/shape/wave1.png";
import wave2 from "../assets/img/shape/wave2.png";
import aboutThumb32Shape from "../assets/img/shape/about-thumb3-2-shape.jpg";
import aboutThumb31Shape from "../assets/img/shape/about-thumb3-1-shape.jpg";
import aboutThumb33Shape from "../assets/img/shape/about-thumb3-3-shape.jpg";
import AboutThumbImg from "../assets/img/normal/about-thumb3-1.jpg";
import aboutThumb32 from "../assets/img/normal/about-thumb3-2.jpg";
import aboutThumb33 from "../assets/img/normal/about-thumb3-3.jpg";
import checkIcon12 from "../assets/img/icon/check-icon1-2.svg";

const AboutSection = () => {
  return (
    <div
      className="overflow-hidden space bg-black overflow-hidden shape-mockup-wrap"
      id="about-sec"
    >
      <div
        className="shape-mockup about-bg-shape3-1"
        style={{ top: 0, left: 0 }}
      >
        <img src={wave1} alt="img" />
      </div>
      <div
        className="shape-mockup about-bg-shape3-2"
        style={{ right: 0, bottom: 0 }}
      >
        <img src={wave2} alt="img" />
      </div>
      <div className="container">
        <div className="row gx-80 flex-row-reverse">
          <div className="col-xl-6">
            <div
              className="img-box3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div
                className="img1 bg-mask"
                style={{ maskImage: `url(${aboutThumb31Shape})` }}
              >
                <img src={AboutThumbImg} alt="About" />
              </div>
              <div className="img2">
                <div
                  className="thumb bg-mask"
                  style={{ maskImage: `url(${aboutThumb32Shape})` }}
                >
                  <img src={aboutThumb32} alt="About" />
                </div>
                <div className="btn-wrap mt-40">
                  <a href="/about" className="th-btn style-gradient2">
                    More About Us{" "}
                    <i className="far fa-long-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div className="experience-wrap">
                <h2 className="counter-number">24</h2>
                <span className="box-text">Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="title-area"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span className="sub-title2 text-gradient text-uppercase mb-30">
                About Us
              </span>
              <h2 className="sec-title style2 text-white fw-bold text-uppercase">
                The impact of voice AI is reshaping the way the world
                communicates—transforming how we live, work, and engage through
                intelligent, human-like conversations.
              </h2>
              <p className="text-gray3">
                Our AI agency is a cutting-edge technology partner that
                specializes in delivering artificial intelligence solutions to
                help businesses streamline operations, improve decision-making,
                and enhance customer experiences. By leveraging the power of AI,
                we aim to revolutionize industries and empower organizations to
                stay competitive in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>
          <div className="col-xl-9 me-auto">
            <div
              className="about-wrap3"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="row gy-40 gx-60 align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <div
                    className="img-box3-2 bg-mask"
                    style={{ maskImage: `url(${aboutThumb33Shape})` }}
                  >
                    <img src={aboutThumb33} alt="img" />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="about-tab-wrap">
                    <ul className="nav nav-tabs about-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="mission-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#missionTab"
                          type="button"
                          role="tab"
                          aria-controls="missionTab"
                          aria-selected="true"
                        >
                          Our Mission
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="vision-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#visionTab"
                          type="button"
                          role="tab"
                          aria-controls="visionTab"
                          aria-selected="false"
                        >
                          Our vision
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="feature-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#featureTab"
                          type="button"
                          role="tab"
                          aria-controls="featureTab"
                          aria-selected="false"
                        >
                          Key Feature
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      {["missionTab", "visionTab", "featureTab"].map(
                        (id, idx) => {
                          // content switch based on tab ID
                          let tabContent;
                          if (id === "missionTab") {
                            tabContent = (
                              <>
                                <p className="text-gray3 mb-20 mt-n2">
                                  At TUNO, our mission is to empower businesses
                                  through intelligent voice automation, enabling
                                  faster decisions, better customer engagement,
                                  and seamless scalability using cutting-edge AI
                                  technology.
                                </p>
                                <div className="checklist style4 style-white">
                                  <ul>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Business Processes Automation
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Improved Decision-Making
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Personalized Customer Experiences
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Technology Integration
                                    </li>
                                  </ul>
                                </div>
                              </>
                            );
                          } else if (id === "visionTab") {
                            tabContent = (
                              <>
                                <p className="text-gray3 mb-20 mt-n2">
                                  We envision a future where voice becomes the
                                  most natural interface between humans and
                                  machines. TUNO aims to lead that
                                  future—offering trusted, adaptable, and
                                  intelligent AI voice experiences globally.
                                </p>
                                <div className="checklist style4 style-white">
                                  <ul>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Scalable AI Infrastructure
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" /> Global
                                      Voice Tech Innovation
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Long-term Customer Success
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Continuous AI Learning
                                    </li>
                                  </ul>
                                </div>
                              </>
                            );
                          } else if (id === "featureTab") {
                            tabContent = (
                              <>
                                <p className="text-gray3 mb-20 mt-n2">
                                  Explore the features that make TUNO the
                                  ultimate voice automation platform for modern
                                  enterprises.
                                </p>
                                <div className="checklist style4 style-white">
                                  <ul>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                     Natural-sounding AI voices
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                      Fast, real-time response handling
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" />{" "}
                                     Easy API & platform integration
                                    </li>
                                    <li>
                                      <img src={checkIcon12} alt="img" /> Custom
                                       Scalable across industries
                                    </li>
                                  </ul>
                                </div>
                              </>
                            );
                          }

                          return (
                            <div
                              key={id}
                              className={`tab-pane fade${
                                idx === 0 ? " show active" : ""
                              }`}
                              id={id}
                              role="tabpanel"
                              aria-labelledby={`${id.split("Tab")[0]}-tab`}
                            >
                              {tabContent}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
