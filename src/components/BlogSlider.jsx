// components/BlogSlider.jsx
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import blogImg1 from "../assets/img/blog/blog_3_1.jpg";
import blogImg2 from "../assets/img/blog/blog_3_2.jpg";
import blogShape from "../assets/img/shape/blog-card3-shape.png";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

// const blogPosts = [
//   {
//     img: blogImg1,
//     date: "24 Jan, 2025",
//     author: "admin",
//     title: "How AI Voicebots Are Redefining Customer Service",
//     link: "/blog-details",
//   },
//   {
//     img: blogImg2,
//     date: "16 Jul, 2025",
//     author: "admin",
//     title: "AI That Listens, Learns, and Responds",
//     link: "/blog-details",
//   },
//   {
//     img: blogImg1,
//     date: "24 Jan, 2025",
//     author: "admin",
//     title: "Behind the Bot: How Tuno’s Voice AI Works in Real-Time",
//     link: "/blog-details",
//   },
//   {
//     img: blogImg2,
//     date: "16 Jul, 2025",
//     author: "admin",
//     title: "Boosting Sales with Smart Reminders and Voice-Based Follow-Ups",
//     link: "/blog-details",
//   },
// ];

const BlogSlider = () => {
  const { API, blogs } = useAuth();

  const sliderRef = useRef(null);

  useEffect(() => {
    // Ensure navigation buttons are ready before Swiper initializes
    setTimeout(() => {
      if (sliderRef.current && sliderRef.current.swiper) {
        sliderRef.current.swiper.navigation.init();
        sliderRef.current.swiper.navigation.update();
      }
    }, 100);
  }, []);

  const title = "Our Latest News and Blog";
  const delay = 50;

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
  return (
    <section
      className="blog-area-3 overflow-hidden space position-relative z-index-2"
      id="blog-sec"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="title-area text-center">
              <span className="sub-title2 text-gradient text-uppercase mb-30">
                News & Blog
              </span>
              <h2
                ref={titleRef}
                className="sec-title style2 fw-bold text-uppercase text-anim2"
              >
                {title.split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`animated-letter ${
                      titleVisible ? "visible" : ""
                    }`}
                    style={{
                      animationDelay: `${index * delay}ms`,
                      fontSize: "3.3rem",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>

        <div className="slider-area blog-slider3 position-relative">
          <Swiper
            ref={sliderRef}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            navigation={{
              prevEl: ".blog-prev-btn",
              nextEl: ".blog-next-btn",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            className="th-slider"
          >
            {blogs.map((post, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="blog-card3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div
                    className="blog-img"
                    style={{
                      WebkitMaskImage: `url(${blogShape})`,
                      maskImage: `url(${blogShape})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <Link to={post}>
                      <img src={`${API}${post.image}`} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link to="#">
                        <FontAwesomeIcon icon={faCalendar} className="me-2" />{" "}
                        {post.createdAt}
                      </Link>
                      <Link to="#">
                        <FontAwesomeIcon icon={faUser} className="me-2" /> by{" "}
                        {post.author}
                      </Link>
                    </div>
                    <h3 className="box-title">
                      <Link to={post}>{post.title}</Link>
                    </h3>
                    <Link
                      to={`/blog/${post._id}`}
                      className="th-btn style-gradient3"
                    >
                      Read More{" "}
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="ms-2"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows - placed outside the Swiper */}
          <div className="blog-nav-buttons">
            <button className="slider-arrow style-border4 slider-prev blog-prev-btn">
              <i className="far fa-arrow-left"></i>
            </button>
            <button className="slider-arrow style-border4 slider-next blog-next-btn">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
