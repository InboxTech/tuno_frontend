import React from "react";
import Slider from "react-slick";
import serviceCard3Shape from "../assets/img/shape/service-card3-shape.png";
import service_card_3_1 from "../assets/img/service/service_card_3_1.jpg";
import service_card_3_2 from "../assets/img/service/service_card_3_2.jpg";
import service_card_3_3 from "../assets/img/service/service_card_3_3.jpg";
import serviceCard3ThumbShape2 from "../assets/img/shape/service-card3-thumb-shape2.png";
import ServiceShapThumbImg from "../assets/img/shape/service-card3-thumb-shape.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="slider-arrow style-border4 slider-next">
    <i className="far fa-arrow-right" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="slider-arrow style-border4 slider-prev">
    <i className="far fa-arrow-left" />
  </button>
);

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1600, // screen <= 1600px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200, // screen <= 1200px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992, // screen <= 992px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // screen <= 768px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // screen <= 576px
      settings: {
        slidesToShow: 1,
        arrows: false, // optional: hide arrows on small devices
        dots: true,    // optional: show dots instead
      },
    },
  ],
};


const services = [
  {
    title: "Machine Learning Solutions",
    image: service_card_3_1,
  },
  {
    title: "Custom AI Software Development",
    image: service_card_3_2,
  },
  {
    title: "Data Analytics and Insights",
    image: service_card_3_3,
  },
    {
    title: "Data Analytics and Insights",
    image: service_card_3_3,
  },
];

const ServiceSlider = () => {
  return (
    <section className="service-area-3 space overflow-hidden" id="service-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center mb-50">
              <span
                className="sub-title2 text-gradient text-uppercase justify-content-center mb-30"
                data-cue="slideInUp"
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
                Our Services
              </span>

              <h2
                className="sec-title style2 text-uppercase fw-bold text-anim2"
                data-cue="slideInUp"
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
                {" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  AI
                </span>{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  technology
                </span>{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  services
                </span>{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  aim
                </span>{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  to
                </span>{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  provide
                </span>{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  intelligent
                </span>{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  solutions.
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="slider-area service-slider3">
          <Slider {...sliderSettings}>
            {services.concat(services).map((service, idx) => (
              <div className="swiper-slide" key={idx}>
                <div
                  className="service-card3 bg-mask"
                  style={{ maskImage: `url(${serviceCard3Shape})` }}
                  mask-image
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-card-bg-shape">
                    <img src={serviceCard3ThumbShape2} alt="img" />
                  </div>
                  <div
                    className="box-thumb"
                    style={{
                      WebkitMaskImage: `url(${ServiceShapThumbImg})`,
                      maskImage: `url(${ServiceShapThumbImg})`,
                    }}
                  >
                    <img src={service.image} alt="Icon" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">
                      <a href="service.html">{service.title}</a>
                    </h3>
                    <p className="box-text">
                      AI technology services aim to provide intelligent
                      solutions that help businesses improve efficiency, make
                      better decisions.
                    </p>
                    <a className="icon-btn style4" href="service-details.html">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
