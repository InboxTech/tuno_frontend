import React, { useState, useEffect, useRef } from "react";
import HeroBgThree from "../assets/img/hero/hero-bg3.png";
import ThumbalanImg from "../assets/img/hero/hero-thumb3-mask.png";
import hero_thumb_3_2 from "../assets/img/hero/bannerNew.jpg";
import hero_thumb_3_1 from "../assets/img/hero/hero_thumb_3_1.jpg";
import heroPlayArrow3 from "../assets/img/hero/hero-play-arrow3.svg";
import BaneerModel from "./model/BannerModel";
import { Link } from "react-router-dom";
const Banner = () => {
  const bannerTitle1 = "Redefining Voice";
  const bannerTitle2 = "with Smart AI Tech";
  const bannerText = "TUNO unlocks business potential with AI-powered voice tech that accelerates service and streamlines tasks."
  const delay = 80;
  let letterCount = 0;
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const bannerTextRef = useRef(null);
  const [title1Visible, setTitle1Visible] = useState(false);
  const [title2Visible, setTitle2Visible] = useState(false);
  const [bannerTextVisible, setBannerTextVisible] = useState(false);

  //title 1 intersersection observer
  useEffect(() => {
    const observerTitle1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitle1Visible(true);
          observerTitle1.disconnect();
        }
      },
      { threshold: 0.3 } // Start animation when 30% of the heading is visible
    );

    if (title1Ref.current) {
      observerTitle1.observe(title1Ref.current);
    }

    return () => observerTitle1.disconnect();

  }, []);


  //title 2 intersersection observer
  useEffect(() => {
    const observerTitle2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitle2Visible(true);
          observerTitle2.disconnect();
        }
      },
      { threshold: 0.3 } // Start animation when 30% of the heading is visible
    );

    if (title2Ref.current) {
      observerTitle2.observe(title2Ref.current);
    }

    return () => observerTitle2.disconnect();

  }, []);

  //banner text intersersection observer
  useEffect(() => {
    const observerBannerText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBannerTextVisible(true);
          observerBannerText.disconnect();
        }
      },
      { threshold: 0.3 } // Start animation when 30% of the heading is visible
    );

    if (bannerTextRef.current) {
      observerBannerText.observe(bannerTextRef.current);
    }

    return () => observerBannerText.disconnect();

  }, []);

  return (
    <React.Fragment>
      <div
        className="th-hero-wrapper hero-3 background-image"
        id="hero"
        style={{ backgroundImage: `url(${HeroBgThree})` }}
      >
        <div className="hero-particle" id="hero-particle1" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero-wrap3">
                <div className="hero-style3">
                  <h1
                    className="hero-title banner-title text-anim2 text-anim"
                    data-cue="slideInUp"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-delay={100}
                    data-show="true"
                    style={{
                      animationName: "slideInUp",
                      animationDuration: "900ms",
                      animationTimingFunction: "ease",
                      animationDelay: "100ms",
                      animationDirection: "normal",
                      animationFillMode: "both",
                    }}
                  >
               

                    
                    <div className="d-flex justify-content-between" style={{ position: "relative", display: "inline-block" }}>
                       <div ref={title1Ref} className="animated-text-container">
                          {/* {bannerTitle1.split("").map((letter, index) => (
                            <span
                              key={index}
                              className={`animated-letter hero-title ${title1Visible ? "visible" : ""}`}
                              style={{ animationDelay: `${index * delay}ms` }}
                            >
                              {letter === " " ? "\u00A0" : letter}
                            </span>
                          ))} */}

                           {bannerTitle1.split(' ').map((word, wordIndex) => (
                            <span key={wordIndex} className="word-wrapper" >
                              {word.split('').map((letter) => {
                                const currentIndex = letterCount++; // unique index for animation delay
                                return (
                                  <span
                                    key={currentIndex}
                                    className={`animated-letter ${title1Visible ? 'visible' : ''}`}
                                    style={{ animationDelay: `${currentIndex * delay}ms` }}
                                  >
                                    {letter}
                                  </span>
                                );
                              })}
                             <span className="animated-letter">&nbsp;</span> {/* Add space between words */}
                            </span>
                          ))}
                        </div>
                    <span className="hero-text-thumb">
                      <img src={hero_thumb_3_1} alt="img" />
                    </span>
                    </div>
                    <div style={{ position: "relative", display: "inline-block" }} >
                      <div ref={title2Ref} className="animated-text-container">
                        {/* {bannerTitle2.split("").map((letter, index) => (
                          <span
                            key={index}
                            className={`animated-letter hero-title ${title2Visible ? "visible" : ""}`}
                            style={{ animationDelay: `${index * delay}ms` }}
                          >
                            {letter === " " ? "\u00A0" : letter}
                          </span>
                        ))} */}

                        
                       {bannerTitle2.split(' ').map((word, wordIndex) => (
                      <span key={wordIndex} className="word-wrapper">
                        {word.split('').map((letter, letterIndex) => {
                          const currentIndex = letterCount++; // unique index for animation delay
                          return (
                            <span
                              key={currentIndex}
                              className={`animated-letter ${title2Visible ? 'visible' : ''}`}
                              style={{ animationDelay: `${currentIndex * delay}ms` }}
                            >
                              {letter}
                            </span>
                          );
                        })}
                        <span className="animated-letter">&nbsp;</span>{/* Add space between words */}
                      </span>
                    ))}
                      </div>
                    </div>
                  
                  </h1>
                  <div className="hero-content-wrap">
                    <p
                      className="hero-text text-anim2"
                      data-cue="slideInUp"
                      data-delay={300}
                      data-show="true"
                      style={{
                        animationName: "slideInUp",
                        animationDuration: "900ms",
                        animationTimingFunction: "ease",
                        animationDelay: "300ms",
                        animationDirection: "normal",
                        animationFillMode: "both",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <div ref={bannerTextRef}
                          style={{
                            position: "relative",
                            display: "inline-block",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          {bannerText.split("").map((letter, index) => (
                            <span
                              key={index}
                              className={`animated-letter ${bannerTextVisible ? "visible" : ""}`}
                              style={{ animationDelay: `${index * delay}ms`, fontSize: "1.05rem" }}
                            >
                              {letter === " " ? "\u00A0" : letter}
                            </span>
                          ))}
                        </div>
                      </div>{" "}
                    </p>
                    <div
                      className="btn-wrap"
                      // data-cue="slideInUp"
                      data-delay={400}
                      data-show="true"
                      style={{
                        animationName: "slideInUp",
                        animationDuration: "900ms",
                        animationTimingFunction: "ease",
                        animationDelay: "400ms",
                        animationDirection: "normal",
                        animationFillMode: "both",
                      }}
                    >
                      <Link to="/contact" className="th-btn style-gradient">
                        Get Started Now{" "}
                        <i className="far fa-long-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="hero-play-wrap"
                  // data-cue="slideInUp"
                  data-delay={300}
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "900ms",
                    animationTimingFunction: "ease",
                    animationDelay: "300ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <div className="hero-play-text">Powering Voice with AI</div>
                  <div className="hero-play-arrow">
                    <img src={heroPlayArrow3} alt="img" />
                  </div>
                  <div className="circle-tag">
                    <span className="circle-title-anime">
                      <span className="char1">T</span>
                      <span className="char2">U</span>
                      <span className="char3">N</span>
                      <span className="char4">O</span>

                      <span className="char6"> </span>
                      <span className="char7">-</span>
                      <span className="char8"> </span>
                      <span className="char9">A</span>
                      <span className="char10">I</span>
                      <span className="char11"> </span>
                      <span className="char12">A</span>
                      <span className="char13">N</span>
                      <span className="char14">D</span>
                      <span className="char15"> </span>
                      <span className="char16">A</span>
                      <span className="char17">U</span>
                      <span className="char18">T</span>
                      <span className="char19">O</span>
                      <span className="char20">M</span>
                      <span className="char21">A</span>
                      <span className="char22">T</span>
                      <span className="char23">I</span>
                      <span className="char24">O</span>
                      <span className="char25">N</span>
                      <span className="char26"> </span>
                      <span className="char27">I</span>
                      <span className="char28">N</span>
                      <span className="char29">T</span>
                      <span className="char30">E</span>
                      <span className="char31">G</span>
                      <span className="char32">R</span>
                      <span className="char33">A</span>
                      <span className="char34">T</span>
                      <span className="char35">I</span>
                      <span className="char36">O</span>
                      <span className="char37">N</span>
                      <span className="char38">.</span>
                    </span>{" "}
                    {/* <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i className="fa-sharp fa-solid fa-play" />
                    </a> */}
                    <BaneerModel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="hero-thumb3 bg-mask"
          data-cue="slideInUp"
          data-delay={500}
          style={{
            maskImage: `url(${ThumbalanImg})`,
            animationName: "slideInUp",
            animationDuration: "900ms",
            animationTimingFunction: "ease",
            animationDelay: "500ms",
            animationDirection: "normal",
            animationFillMode: "both",
            //  backgroundImage: `url(${ThumbalanImg})`
          }}
          data-show="true"
        >
          <img
            src={hero_thumb_3_2}
            alt="img"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
