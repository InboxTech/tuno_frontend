import React from "react";
import whyThumbShape31 from "../assets/img/shape/why-thumb-shape3-1.png"
import theerOne from "../assets/img/feature/3-1.png";
import threeTwo from "../assets/img/feature/3-2.png"
import threeThree from "../assets/img/feature/3-3.png"
import threeFour from "../assets/img/feature/3-4.png"
import threeFive from "../assets/img/feature/3-5.png"
import threeSix from "../assets/img/feature/3-6.png"

const IndustrieServe = () => {
  return (
    <React.Fragment>
      <section className="space overflow-hidden">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <div className="title-area" data-aos="fade-left" >
                <span className="sub-title2 text-gradient text-uppercase mb-30">
                  Industries We Serve
                </span>
                <h2 className="sec-title style2 fw-bold text-uppercase text-anim2">
                  Industries Where ai is optimizing the Processes
                </h2>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="title-area text-start" data-aos="fade-right">
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="feature-tab1"
                  data-bs-toggle="tab"
                  data-bs-target="#featureTab1"
                  type="button"
                  role="tab"
                  aria-controls="featureTab"
                  aria-selected="true"
                >
                  <span className="box-number">#01</span>Healthcare AI
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="feature-tab2"
                  data-bs-toggle="tab"
                  data-bs-target="#featureTab2"
                  type="button"
                  role="tab"
                  aria-controls="featureTab2"
                  aria-selected="false"
                >
                  <span className="box-number">#02</span>Finance AI
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="feature-tab3"
                  data-bs-toggle="tab"
                  data-bs-target="#featureTab3"
                  type="button"
                  role="tab"
                  aria-controls="featureTab3"
                  aria-selected="false"
                >
                  <span className="box-number">#03</span>Education Ai
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="feature-tab4"
                  data-bs-toggle="tab"
                  data-bs-target="#featureTab4"
                  type="button"
                  role="tab"
                  aria-controls="featureTab4"
                  aria-selected="false"
                >
                  <span className="box-number">#04</span>Manufacturing AI
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="feature-tab5"
                  data-bs-toggle="tab"
                  data-bs-target="#featureTab5"
                  type="button"
                  role="tab"
                  aria-controls="featureTab5"
                  aria-selected="false"
                >
                  <span className="box-number">#05</span>Fintech Ai
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="feature-tab6"
                  data-bs-toggle="tab"
                  data-bs-target="#featureTab6"
                  type="button"
                  role="tab"
                  aria-controls="featureTab6"
                  aria-selected="false"
                >
                  <span className="box-number">#06</span>E-commerce Ai
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="featureTab1"
                role="tabpanel"
                aria-labelledby="feature-tab1"
              >
                <div className="feature-tab-content-wrap"  data-aos="fade-left">
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
                    <img src={theerOne} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Healthcare Ai</h4>
                    <p className="box-text">
                      AI for diagnostics, personalized treatment, and patient
                      care optimization. To be a leading AI agency recognized
                      for creating intelligent solutions that drive meaningful
                      change across industries, fostering
                    </p>
                    <p className="box-text mt-30">
                      Smarter decision-making, and enabling businesses to
                      achieve their full potential through automation.
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
                id="featureTab2"
                role="tabpanel"
                aria-labelledby="feature-tab2"
              >
                <div className="feature-tab-content-wrap"  data-aos="fade-left">
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
                    <img  src={threeTwo} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Finance Ai</h4>
                    <p className="box-text">
                      AI for diagnostics, personalized treatment, and patient
                      care optimization. To be a leading AI agency recognized
                      for creating intelligent solutions that drive meaningful
                      change across industries, fostering
                    </p>
                    <p className="box-text mt-30">
                      Smarter decision-making, and enabling businesses to
                      achieve their full potential through automation.
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
                id="featureTab3"
                role="tabpanel"
                aria-labelledby="feature-tab3"
              >
                <div className="feature-tab-content-wrap"  data-aos="fade-left">
                  <div
                    className="feature-tab-thumb"
                    data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                     style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }} 
                  >
                    <img src={threeThree} alt="img" />
                  </div>
                  <div className="feature-tab-content" >
                    <h4 className="box-title">Education Ai</h4>
                    <p className="box-text">
                      AI for diagnostics, personalized treatment, and patient
                      care optimization. To be a leading AI agency recognized
                      for creating intelligent solutions that drive meaningful
                      change across industries, fostering
                    </p>
                    <p className="box-text mt-30">
                      Smarter decision-making, and enabling businesses to
                      achieve their full potential through automation.
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
                <div className="feature-tab-content-wrap"  data-aos="fade-left">
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
                    <img src={threeFour} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Manufacturing AI</h4>
                    <p className="box-text">
                      AI for diagnostics, personalized treatment, and patient
                      care optimization. To be a leading AI agency recognized
                      for creating intelligent solutions that drive meaningful
                      change across industries, fostering
                    </p>
                    <p className="box-text mt-30">
                      Smarter decision-making, and enabling businesses to
                      achieve their full potential through automation.
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
                id="featureTab5"
                role="tabpanel"
                aria-labelledby="feature-tab5"
              >
                <div className="feature-tab-content-wrap"  data-aos="fade-left">
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
                    <img src={threeFive} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Fintech Ai</h4>
                    <p className="box-text">
                      AI for diagnostics, personalized treatment, and patient
                      care optimization. To be a leading AI agency recognized
                      for creating intelligent solutions that drive meaningful
                      change across industries, fostering
                    </p>
                    <p className="box-text mt-30">
                      Smarter decision-making, and enabling businesses to
                      achieve their full potential through automation.
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
                id="featureTab6"
                role="tabpanel"
                aria-labelledby="feature-tab6"
              >
                <div className="feature-tab-content-wrap"  data-aos="fade-left">
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
                    <img src={threeSix} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">E-commerce Ai</h4>
                    <p className="box-text">
                      AI for diagnostics, personalized treatment, and patient
                      care optimization. To be a leading AI agency recognized
                      for creating intelligent solutions that drive meaningful
                      change across industries, fostering
                    </p>
                    <p className="box-text mt-30">
                      Smarter decision-making, and enabling businesses to
                      achieve their full potential through automation.
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
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IndustrieServe;
