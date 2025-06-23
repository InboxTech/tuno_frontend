// components/BlogSlider.jsx
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import blogImg1 from "../assets/img/blog/blog_3_1.jpg";
import blogImg2 from "../assets/img/blog/blog_3_2.jpg";
import blogShape from "../assets/img/shape/blog-card3-shape.png";

const blogPosts = [
  {
    img: blogImg1,
    date: "24 Jan, 2025",
    author: "admin",
    title: "The rise of AI and Robotics in retail customer experiences",
    link: "blog-details.html",
  },
  {
    img: blogImg2,
    date: "16 Jul, 2025",
    author: "admin",
    title: "How AI is Transforming Businesses Across Industries",
    link: "blog-details.html",
  },
  {
    img: blogImg1,
    date: "24 Jan, 2025",
    author: "admin",
    title: "The rise of AI and Robotics in retail customer experiences",
    link: "blog-details.html",
  },
  {
    img: blogImg2,
    date: "16 Jul, 2025",
    author: "admin",
    title: "How AI is Transforming Businesses Across Industries",
    link: "blog-details.html",
  },
];

const BlogSlider = () => {
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
              <h2 className="sec-title style2 fw-bold text-uppercase text-anim2">
                Our Latest News and Blog
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
            {blogPosts.map((post, idx) => (
              <SwiperSlide key={idx}>
                <div className="blog-card3" data-aos="fade-up">
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
                    <a href={post.link}>
                      <img src={post.img} alt="blog" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="far fa-calendar"></i> {post.date}
                      </a>
                      <a href="blog.html">
                        <i className="far fa-user"></i> by {post.author}
                      </a>
                    </div>
                    <h3 className="box-title">
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <a href={post.link} className="th-btn style-gradient3">
                      Read More <i className="fal fa-long-arrow-right ms-2"></i>
                    </a>
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
