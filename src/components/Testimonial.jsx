import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import tstiCard3Shape from "../assets/img/shape/testi-card3-shape.png";
import testi_bg_3_1 from "../assets/img/bg/testi-bg-3-1.png";
import axios from "axios";
import { useAuth } from "../store/auth";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const titleRef = useRef(null);
  const { API } = useAuth();

  const [testimonials, setTestimonials] = useState([]);
  const [titleVisible, setTitleVisible] = useState(false);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${API}/api/testimonialData/testimonial`);
        setTestimonials(res.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Animated title logic
  const title = "What Our Clients Say About us?";
  const delay = 50;
  let letterCount = 0;

  useEffect(() => {
    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observerTitle.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observerTitle.observe(titleRef.current);
    }

    return () => observerTitle.disconnect();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3.5 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section
      className="overflow-hidden space"
      style={{
        backgroundImage: `url(${testi_bg_3_1})`,
        backgroundSize: "cover",
      }}
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
            <h2
              ref={titleRef}
              className="sec-title style2 fw-bold text-uppercase"
            >
              {title.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="word-wrapper"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {word.split("").map((letter, letterIndex) => {
                    const currentIndex = letterCount++;
                    return (
                      <span
                        key={currentIndex}
                        className={`animated-letter ${
                          titleVisible ? "visible" : ""
                        }`}
                        style={{ animationDelay: `${currentIndex * delay}ms` }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                  <span>&nbsp;</span>
                </span>
              ))}
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
                <div className="testi-card_review text-yellow-500 mb-2 flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < item.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="box-text mb-3">{item.description}</p>
                <div className="testi-card-profile flex items-center gap-3">
                  {item.image && (
                    <div className="testi-card-avater">
                      <img className="testimonialImg" src={`${API}${item.image}`} alt={item.name} />
                    </div>
                  )}
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
