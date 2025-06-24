import React from "react";
import process_1_1 from "../assets/img/process/process_1_1.jpg";
import process_1_2 from "../assets/img/process/process_1_2.jpg";
import process_1_3 from "../assets/img/process/process_1_3.jpg";
import process_1_4 from "../assets/img/process/process_1_4.jpg";

const WorkProcess = () => {
  return (
    <React.Fragment>
      <section className="position-relative space overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <div className="shadow-title style4">PROCESS</div>
                <span className="sub-title2 text-gradient text-uppercase mb-30">
                  Work Process
                </span>
                <h2 className="sec-title style2 fw-bold text-uppercase text-anim2">
                  Our 4-Step Process for Delivering AI Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="process-card-wrap">
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">1</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src={process_1_1} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <h3 className="box-title">Discovery &amp; Consultation</h3>
                <p className="box-text">
                  We start by deeply analyzing your business needs, workflows,
                  and goals—identifying where AI can add the most value with
                  minimal disruption.
                </p>
              </div>
            </div>
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">2</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <img src={process_1_2} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="box-title">Solution Design &amp; Development</h3>
                <p className="box-text">
                  Custom AI solutions are designed around your operations. Our
                  team builds scalable, reliable voice systems tailored to your
                  use cases and infrastructure
                </p>
              </div>
            </div>
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">3</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <img src={process_1_3} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="box-title">Implementation &amp; Integration</h3>
                <p className="box-text">
                  We deploy and integrate AI solutions with your current tools
                  and platforms, ensuring seamless functionality and zero
                  operational downtime.
                </p>
              </div>
            </div>
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">4</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <img src={process_1_4} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="box-title">
                  Monitoring &amp; Continuous Improvement
                </h3>
                <p className="box-text">
                  Post-launch, we monitor system performance and user
                  feedback—refining features and training models to improve
                  accuracy, speed, and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WorkProcess;
