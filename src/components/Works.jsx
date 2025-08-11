// components/MarqueeSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import projectCard3Shape from "../assets/img/shape/project-card3-shape.png";
import "swiper/css"; // Required styles
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

// Static list of items
const sliderItems = [
  "Healthcare",
  "AI Algorithms",
  "Computer Vision",
  "Deep Learning",
  "Customer Service",
];
// Reusable marquee component
const MarqueeSlider = ({
  bgColor = "bg-gradient",
  wrapClass = "marquee-wrap2",
  className = "",
}) => {
  return (
    <div className={`${wrapClass} ${bgColor} pt-40 pb-40`}>
      <div className="container-fluid p-0">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          speed={10000}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          allowTouchMove={false}
          className={`th-slider marquee-slider2 ${className}`}
        >
          {[...sliderItems, ...sliderItems].map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="marquee-card style2 text-white">
                <Link to="#" target="_blank" rel="noopener noreferrer">
                  {item}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Main wrapper
const Work = () => {
  const { API, projectItems: originalItems } = useAuth();
  const projectItems =
    originalItems.length === 5
      ? [...originalItems, originalItems[0]] // 👈 add first again for safe loop
      : originalItems;
  return (
    <React.Fragment>
      <div
        className="overflow-hidden pt-80 pb-80"
        data-show="true"
        style={{
          animationName: "slideInUp",
          animationDuration: "900ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both",
        }}
      >
        <MarqueeSlider wrapClass="marquee-wrap2" bgColor="bg-gradient" />
        <MarqueeSlider wrapClass="marquee-wrap3" bgColor="bg-gray" />
        {/* <MarqueeSlider wrapClass="marquee-wrap3" bgColor="bg-gradient" /> */}
      </div>
      <section
        className="space-bottom overflow-hidden position-relative"
        id="project-sec"
      >
        <div className="container">
          <div className="title-area text-xl-start text-center">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-auto">
                <h2 className="sub-title2 text-gradient text-uppercase justify-content-xl-start justify-content-center">
                  Case Studies
                </h2>
              </div>
              <div className="col-md d-none d-xl-block">
                <hr className="title-line mb-0" />
              </div>
              <div className="col-xl-5">
                <h2 className="sec-title text-anim2 mb-0">Work</h2>
              </div>
              <div className="col-xxl-3 col-xl-4">
                <p className="mt-xl-0 mt-4" data-aos="fade-right" data-aos-duration="2000">
                  TUNO is a cutting-edge AI voice technology partner, delivering
                  tailored automation to help businesses streamline operations,
                  make smarter decisions, and create seamless customer
                  experiences. Leveraging the power of conversational AI, we
                  bring industry-specific innovation that transforms the way
                  work gets done—efficiently and intelligently
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0">
          <div className="slider-area project-slider3">
            {projectItems.length > 0 && (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  601: { slidesPerView: 2 },
                  991: { slidesPerView: 2.5 },
                  1200: { slidesPerView: 3.5 },
                  1600: { slidesPerView: 5 },
                }}
                className="th-slider"
              >
                {projectItems.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="project-card3">
                      <div className="box-img"
                        style={{
                          WebkitMaskImage: `url(${projectCard3Shape})`,
                          maskImage: `url(${projectCard3Shape})`,
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskSize: "cover",
                          maskSize: "cover",
                        }}
                      >
                        <img src={`${API}${item.projectImage}`} alt="project" />
                        <Link
                          to={`/project/${item._id}`}
                          className="icon-btn style5"
                        >
                          <i className="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                      <div className="box-content">
                        <p className="box-subtitle text-white">{item.title}</p>
                        <h3 className="box-title text-white">
                          <Link to={`/project/${item._id}`}>
                            {item.shortDescription}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Work;
