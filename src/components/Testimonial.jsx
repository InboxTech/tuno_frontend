import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import tstiCard3Shape from "../assets/img/shape/testi-card3-shape.png";
import testi1_1 from "../assets/img/testimonial/testi1-1.jpg";
import testi1_2 from "../assets/img/testimonial/testi1-2.jpg";
import testi1_3 from "../assets/img/testimonial/testi1-3.jpg";
import testi1_4 from "../assets/img/testimonial/testi1-4.jpg";
import testi_bg_3_1 from "../assets/img/bg/testi-bg-3-1.png";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    text: `“TUNO helped us reduce call handling time by over 40%. The integration was seamless, and the AI voice is impressively natural.”`,
    name: "Michael Lacefield",
    position: "Co-founder, XYZ",
    image: testi1_1,
  },
  {
    text: `“Their AI voice system transformed our customer support. It’s like having an extra team that works 24/7 without missing a beat.”`,
    name: "Aisha Verma",
    position: " CX Lead, FinBridge ",
    image: testi1_2,
  },
  {
    text: `“TUNO brought unmatched scalability to our service operations. It’s fast, reliable, and easily adapted to our growing business needs.”`,
    name: "Raj Malhotra",
    position: "Operations Head, MedRoute ",
    image: testi1_3,
  },
  {
    text: `“From day one, TUNO understood our industry needs. Their voice AI tech improved both user satisfaction and operational efficiency.”`,
    name: "Elena Cruz",
    position: "SmartRetail Inc",
    image: testi1_4,
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="overflow-hidden space"
      style={{ backgroundImage: `url(${testi_bg_3_1})` }}
    >
      <div className="container">
        <div
          className="row items-center mb-8"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div className="col-xl-5 col-lg-8 text-lg-start text-center">
            <span className="sub-title2 text-gradient text-uppercase mb-3">
              Testimonials
            </span>
            <h2 className="sec-title style2 fw-bold text-uppercase">
              What Our Clients Say About us?
            </h2>
          </div>
          <div className="col-lg-auto justify-end d-flex gap-2">
            <button
              className="icon-btn style4 slider-prev"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <FaArrowLeft />
            </button>
            <button
              className="icon-btn style4 slider-next"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((item, i) => (
            <div key={i} className="px-3">
              {/* <div
                className="testi-card style2  bg-mask"
                // style='mask-image: url("assets/img/shape/testi-card3-shape.png");'
                style={{
                  WebkitMaskImage: `url(${tstiCard3Shape})`,
                  maskImage: `url(${tstiCard3Shape})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
              >
                <div className="testi-card_review text-yellow-500 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="box-text mb-3">{item.text}</p>
                <div className="testi-card-profile flex items-center gap-3">
                  <div className="testi-card-avater">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="testi-card-profile-detaile">
                    <h3 className="box-title mb-0">{item.name}</h3>
                    <p className="box-desig">{item.position}</p>
                  </div>
                </div>
              </div> */}

              <div
                className="testi-card style2 bg-mask"
                style={{
                  WebkitMaskImage: `url(${tstiCard3Shape})`,
                  maskImage: `url(${tstiCard3Shape})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="testi-card_review text-yellow-500 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="box-text mb-3">{item.text}</p>
                <div className="testi-card-profile">
                  <div className="testi-card-avater">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="testi-card-profile-detaile">
                    <h3 className="box-title mb-0">{item.name}</h3>
                    <p className="box-desig">{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
