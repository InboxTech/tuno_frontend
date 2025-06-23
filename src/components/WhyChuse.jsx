import React from "react";
import whyThumb31 from "../assets/img/normal/why-thumb3-1.jpg";
import WhyThumbShap31 from "../assets/img/shape/why-thumb-shape3-1.png";
import whyThumbShape32 from "../assets/img/shape/why-thumb-shape3-2.png";
import WhyBg31 from "../assets/img/bg/why-bg-3-1.png";
import whyThumb32 from "../assets/img/normal/why-thumb3-2.jpg";

const WhyChuse = () => {
  return (
    <React.Fragment>
      <section className="why-sec3 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="why-wrap3">
            <div className="why-box3-1">
              <div
                className="img1"
                style={{
                  WebkitMaskImage: `url(${WhyThumbShap31})`,
                  maskImage: `url(${WhyThumbShap31})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
              >
                <img src={whyThumb31} alt="img" />
              </div>
              <div
                className="img2"
              
                style={{
                  WebkitMaskImage: `url(${whyThumbShape32})`,
                  maskImage: `url(${whyThumbShape32})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
              >
                <img src={whyThumb32} alt="img" />
              </div>
            </div>
            <div
              className="why-wrap-content background-image"
              
              style={{ backgroundImage:`url(${WhyBg31})` }}
            >
              <div className="why-content" data-aos="fade-up">
                <div className="title-area">
                  <span className="sub-title2 text-gradient text-uppercase mb-30">
                    Why Choose Us
                  </span>
                  <h2 className="sec-title style2 fw-bold text-uppercase text-anim2">
                    Empowering Businesses with Cutting-Edge AI Solutions to
                    Drive Innovation.
                  </h2>
                  <p>
                    Our AI agency is a cutting-edge technology partner that
                    specializes in delivering artificial intelligence solutions
                    to help businesses streamline operations, improve
                    decision-making, and enhance customer experiences. By
                    leveraging the power of AI,
                  </p>
                </div>
                <div className="why-feature-wrap3" data-aos="fade-rith">
                  <div className="why-feature-card">
                    <h4 className="box-title">Expertise</h4>
                    <p className="box-text">
                      Our team has extensive experience in building and
                      deploying AI solutions across various industries.
                    </p>
                  </div>
                  <div className="why-feature-card">
                    <h4 className="box-title">Customization</h4>
                    <p className="box-text">
                      We offer tailor-made solution designed to address your
                      unique business challenges. various industries.
                    </p>
                  </div>
                  <div className="why-feature-card">
                    <h4 className="box-title">Innovation</h4>
                    <p className="box-text">
                      We stay ahead of the curve by adopting the latest AI
                      advancements &amp; technology. various industries.
                    </p>
                  </div>
                  <div className="why-feature-card">
                    <h4 className="box-title">Scalability</h4>
                    <p className="box-text">
                      Our solutions are designed to grow with your business,
                      ensuring long-term value. various industries.
                    </p>
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

export default WhyChuse;
