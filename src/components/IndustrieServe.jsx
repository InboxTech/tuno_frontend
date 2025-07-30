import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

import whyThumbShape31 from "../assets/img/shape/why-thumb-shape3-1.png";
// import theerOne from "../assets/img/feature/3-1.png";
import Healthcare from "../assets/img/industry/Healthcare.jpg";

// import threeTwo from "../assets/img/feature/3-2.png";
import finance_Banking from "../assets/img/industry/finance_Banking.jpg";

// import threeThree from "../assets/img/feature/3-3.png";
import Education from "../assets/img/industry/Education.jpg";

// import threeFour from "../assets/img/feature/3-4.png";
import BPO_Callcenter from "../assets/img/industry/BPO_Callcenter.jpg";

// import threeFive from "../assets/img/feature/3-5.png";
import Travel_hospitality from "../assets/img/industry/Travel_hospitality.jpg";

// import threeSix from "../assets/img/feature/3-6.png";
import e_commarce_retail from "../assets/img/industry/e_commarce_retail.jpg";
import Logistics_Pharma from "../assets/img/industry/Logistics_Pharma.jpg";
import { Link } from "react-router-dom";

const IndustrieServe = () => {
  const title = "Industries Where ai is optimizing the Processes";
  const delay = 50;
  let letterCount = 0;
  const [getIndustry, setGetIndustry] = useState([]);
  const { API } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const titleRef = useRef(null);
  const [titleVisible, setPTitleVisible] = useState(false);
  //work process title intersersection observer
  useEffect(() => {
    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPTitleVisible(true);
          observerTitle.disconnect();
        }
      },
      { threshold: 0.3 } // Start animation when 30% of the heading is visible
    );

    if (titleRef.current) {
      observerTitle.observe(titleRef.current);
    }

    return () => observerTitle.disconnect();
  }, []);

  //get industry using fetch api
  const getAllIndustry = async () => {
    try {
      const response = await fetch(`${API}/api/industry/getIndustry`, {
        method: "GET"
      });

      if (response.ok) {
        const data = await response.json();
        setGetIndustry(Array.isArray(data) ? data : []);
      } else {
        throw new Error("Failed to fetch Industries");
      }
    } catch (error) {
      console.error("Industry Error:", error);
      toast.error(error.message || "Error fetching industries");
    }
  };

  useEffect(() => {
    getAllIndustry();
  }, []);
  return (
    <React.Fragment>
      <section className="space overflow-hidden">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <div
                className="title-area"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <span className="sub-title2 text-gradient text-uppercase mb-30">
                  Industries We Serve
                </span>
                <h2
                  ref={titleRef}
                  className="sec-title style2 fw-bold text-uppercase text-anim2"
                >
                  {/* {title.split('').map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${titleVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * delay}ms`}}
                                                >
                                                {letter === ' ' ? '\u00A0' : letter}
                                                </span>
                                        ))} */}

                  {title.split(" ").map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className="word-wrapper"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {word.split("").map((letter, letterIndex) => {
                        const currentIndex = letterCount++; // unique index for animation delay
                        return (
                          <span
                            key={currentIndex}
                            className={`animated-letter ${titleVisible ? "visible" : ""
                              }`}
                            style={{
                              animationDelay: `${currentIndex * delay}ms`,
                            }}
                          >
                            {letter}
                          </span>
                        );
                      })}
                      <span>&nbsp;</span> {/* Add space between words */}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="title-area text-start"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <p>
                  Our AI agency is a cutting-edge technology partner that
                  specializes in delivering artificial intelligence solutions to
                  help businesses streamline operations, improve
                  decision-making, and enhance customer experiences. By
                  leveraging the power of AI, we aim to revolutionize
                  industries.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-wrap3">
            <ul className="nav nav-tabs feature-tab" role="tablist">

              {getIndustry.map((industry, index) => (
                <li className="nav-item" role="presentation" key={industry._id}>
                  <button
                    className={`nav-link ${activeTab === index ? "active" : ""}`}
                    id={`feature-tab${index + 1}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#featureTab${index + 1}`}
                    type="button"
                    role="tab"
                    aria-controls={`featureTab${index + 1}`}
                    aria-selected={activeTab === index}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="box-number">#{String(index + 1).padStart(2, "0")}</span>
                    {industry.title}
                  </button>
                </li>
              ))}

            </ul>
            <div className="tab-content">
              {getIndustry.map((industry, index) => (

                <div key={industry._id}
                  className={`tab-pane fade show ${activeTab === index ? "active" : ""}`}
                  id={`featureTab${index + 1}`}
                  role="tabpanel"
                  aria-labelledby={`feature-tab${index + 1}`}
                >
                  <div className="feature-tab-content-wrap" data-aos="fade-left">
                    <div
                      className="feature-tab-thumb"
                      // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                      style={{
                        WebkitMaskImage: `url(${whyThumbShape31})`,
                        maskImage: `url(${whyThumbShape31})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskSize: "cover",
                      }}
                    >
                      <img src={`${API}${industry.industry_image}`} alt="img" />
                    </div>
                    <div className="feature-tab-content">
                      <h4 className="box-title">{industry.title}</h4>
                      <p className="box-text">
                        {industry.short_description}
                      </p>

                      <div className="btn-wrap mt-40">
                        <Link className="icon-btn style4" to={`/industry-details/${industry._id}`}>
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div
                className="tab-pane fade"
                id="featureTab2"
                role="tabpanel"
                aria-labelledby="feature-tab2"
              >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div
                    className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={finance_Banking} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Banking & Finance</h4>
                    <p className="box-text">
                      TUNO enables banks and fintech firms to automate routine
                      queries, support KYC, and streamline loan servicing.
                    </p>
                    <p className="box-text mt-30">
                      Our voice AI ensures secure, compliant, and fast customer
                      interactions—freeing up agents for high-value tasks while
                      delivering 24/7 financial assistance.
                    </p>
                    <div className="btn-wrap mt-40">
                      <Link className="icon-btn style4" to="/service-details">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="featureTab3"
                role="tabpanel"
                aria-labelledby="feature-tab3"
              >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div
                    className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={e_commarce_retail} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">E-commerce Ai</h4>
                    <p className="box-text">
                      AI voicebots manage order tracking, product discovery,
                      customer service, and post-sale feedback. TUNO enhances
                      shopping experiences by enabling instant, conversational
                      engagement that drives sales and reduces support costs
                    </p>

                    <div className="btn-wrap mt-40">
                      <a
                        className="icon-btn style4"
                        href="service-details.html"
                      >
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="featureTab4"
                role="tabpanel"
                aria-labelledby="feature-tab4"
              >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div
                    className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={Education} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Education Ai</h4>
                    <p className="box-text">
                      TUNO supports student engagement, smart tutoring, and
                      administrative automation in education. From inquiry
                      handling to attendance updates, our AI voice systems
                      improve learning outcomes and operational efficiency for
                      schools and ed-tech platforms.
                    </p>

                    <div className="btn-wrap mt-40">
                      <Link className="icon-btn style4" to="/service-details">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="featureTab5"
                role="tabpanel"
                aria-labelledby="feature-tab5"
              >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div
                    className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={BPO_Callcenter} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">BPOs & Call Centers </h4>
                    <p className="box-text">
                      TUNO enhances agent productivity with voicebots that
                      handle Tier-1 queries, surveys, and appointment calls.
                      With real-time responses and multi-language support, we
                      help call centers reduce wait times and boost customer
                      satisfaction at scale.
                    </p>

                    <div className="btn-wrap mt-40">
                      <Link className="icon-btn style4" to="/service-details">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="featureTab6"
                role="tabpanel"
                aria-labelledby="feature-tab6"
              >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div
                    className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={Travel_hospitality} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Travel & Hospitality </h4>
                    <p className="box-text">
                      From bookings to feedback collection, TUNO’s AI voice tech
                      handles guest queries, itinerary updates, and multilingual
                      support. We streamline the entire travel experience—making
                      every interaction faster, friendlier, and more
                      personalized
                    </p>

                    <div className="btn-wrap mt-40">
                      <Link className="icon-btn style4" to="/service-details">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="featureTab7"
                role="tabpanel"
                aria-labelledby="feature-tab7"
              >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div
                    className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={Logistics_Pharma} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Logistics & Pharma </h4>
                    <p className="box-text">
                      TUNO automates dispatch alerts, inventory updates, and
                      customer notifications in logistics and pharma. Our
                      secure, voice-enabled systems reduce human error, speed up
                      delivery chains, and improve last-mile coordination.
                    </p>

                    <div className="btn-wrap mt-40">
                      <Link className="icon-btn style4" to="/service-details">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IndustrieServe;
