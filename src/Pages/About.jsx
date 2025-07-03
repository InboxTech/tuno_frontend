import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from 'react-scroll-trigger';

import AboutThumb41 from "../assets/img/normal/about-thumb4-1.jpg";
import AboutThumb42 from "../assets/img/normal/about-thumb4-2.jpg";
// import about2 from "../assets/img/normal/about2.jpg";

import AboutThumb13 from "../assets/img/normal/about-thumb1-3.jpg";
import AboutFeatureIcon11 from "../assets/img/icon/about-feature-icon1-1.svg";
import AboutFeatureIcon12 from "../assets/img/icon/about-feature-icon1-2.svg";
// import Process21 from "../assets/img/process/process_2_1.jpg";
import about_work_process from "../assets/img/process/about_work_process.jpg";

import ProcessArrow21 from "../assets/img/icon/process-arrow2-1.svg";
import ProcessArrow22 from "../assets/img/icon/process-arrow2-2.svg";
import team11 from "../assets/img/team/team_1_1.png";
import team12 from "../assets/img/team/team_1_2.png";
import team13 from "../assets/img/team/team_1_3.png";
import team14 from "../assets/img/team/team_1_4.png";

// import feature41 from "../assets/img/feature/4-1.jpg";
import advance_technology1 from "../assets/img/feature/advance_technology1.jpg";
// import feature42 from "../assets/img/feature/4-2.jpg";
import advance_technology2 from "../assets/img/feature/advance_technology2.jpg";
// import feature43 from "../assets/img/feature/4-3.jpg";
import advance_technology3 from "../assets/img/feature/advance_technology3.jpg";

import Featureicon41 from "../assets/img/icon/feature-icon4-1.svg";
import Featureicon42 from "../assets/img/icon/feature-icon4-2.svg";
import Featureicon43 from "../assets/img/icon/feature-icon4-3.svg";
import Featureicon44 from "../assets/img/icon/feature-icon4-4.svg";
import Blog11 from "../assets/img/blog/blog_1_1.jpg";
import Blog12 from "../assets/img/blog/blog_1_2.jpg";
import Blog13 from "../assets/img/blog/blog_1_3.jpg";
import Aboutbg11 from "../assets/img/bg/about-bg-1-1.png";
import Teambg3 from "../assets/img/bg/team-bg-3.jpg";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcumbs from "../components/Breadcumbs";
import BlogSlider from "../components/BlogSlider";
import BannerModel from "../components/model/BannerModel";
function About() {
    const [counterOn, setCounterOn] = useState(false);
    const text = "Revolutionizing Voice Automation with AIDriven Precision ";
    const text2 = "How Does TUNO Work?";
    const text3_experts = "Our Expert Creative Minds";
    const text4_advancetech = "Innovation Through Voice AI Technology";
    const text_faq = "Frequently Asked Questions";
    const text_blog = "Our Latest News & Blogs";
    const delay = 50;
    let letterCount = 0;
    const aboutHeadRef = useRef(null);
    const workProcessHeadRef = useRef(null);
    const expertHeadRef = useRef(null);
    const faqHeadRef = useRef(null);
    const advanceTechHeadRef = useRef(null);
    const blogHeadRef = useRef(null);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [workHeadVisible, setWorkHeadVisible] = useState(false);
    const [expertHeadVisible, setexpertHeadVisible] = useState(false);
    const [advanceTechHeadVisible, setAdvanceTechHeadVisible] = useState(false);
    const [faqHeadVisible, setFaqHeadVisible] = useState(false);
    const [blogHeadVisible, setBlogHeadVisible] = useState(false);

    //about intersersection observer
    useEffect(() => {
        const observerAbout = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true);
                    observerAbout.disconnect();
                }
            },
            { threshold: 0.3 } // Start animation when 30% of the heading is visible
        );

        if (aboutHeadRef.current) {
            observerAbout.observe(aboutHeadRef.current);
        }

        return () => observerAbout.disconnect();
    }, []);

    //work process intersersection observer
    useEffect(() => {
        const observerWorkProcess = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setWorkHeadVisible(true);
                    observerWorkProcess.disconnect();
                }
            },
            { threshold: 0.3 } // Start animation when 30% of the heading is visible
        );

        if (workProcessHeadRef.current) {
            observerWorkProcess.observe(workProcessHeadRef.current);
        }

        return () => observerWorkProcess.disconnect();
    }, []);

    //expert intersersection observer
    useEffect(() => {
        const observerExpert = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setexpertHeadVisible(true);
                    observerExpert.disconnect();
                }
            },
            { threshold: 0.3 } // Start animation when 30% of the heading is visible
        );

        if (expertHeadRef.current) {
            observerExpert.observe(expertHeadRef.current);
        }

        return () => observerExpert.disconnect();
    }, []);

    //faq intersersection observer
    useEffect(() => {
        const observerFaq = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFaqHeadVisible(true);
                    observerFaq.disconnect();
                }
            },
            { threshold: 0.3 } // Start animation when 30% of the heading is visible
        );

        if (faqHeadRef.current) {
            observerFaq.observe(faqHeadRef.current);
        }

        return () => observerFaq.disconnect();
    }, []);

    //advance tech intersersection observer
    useEffect(() => {
        const observerAdvanceTech = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAdvanceTechHeadVisible(true);
                    observerAdvanceTech.disconnect();
                }
            },
            { threshold: 0.3 } // Start animation when 30% of the heading is visible
        );

        if (advanceTechHeadRef.current) {
            observerAdvanceTech.observe(advanceTechHeadRef.current);
        }

        return () => observerAdvanceTech.disconnect();
    }, []);

    //blog intersersection observer
    useEffect(() => {
        const observerBlog = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setBlogHeadVisible(true);
                    observerBlog.disconnect();
                }
            },
            { threshold: 0.3 } // Start animation when 30% of the heading is visible
        );

        if (blogHeadRef.current) {
            observerBlog.observe(blogHeadRef.current);
        }

        return () => observerBlog.disconnect();
    }, []);

    return (
        <>
            {/* <div className="breadcumb-wrapper" style={{ backgroundImage: `url(${BreadcumbBg})` }} data-overlay="black" data-opacity="7">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title text-anim"  data-delay="100">About Us</h1>
                                <ul className="breadcumb-menu"  data-delay="300">
                                    <li><a href="/">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Breadcumbs prevLink="Home" currentLink="About" pageTitle="About Us" />

            {/* about us section start */}
            <div className="overflow-hidden space overflow-hidden" id="about-sec">
                <div className="container">
                    <div className="row gy-60 gx-80 align-items-start">
                        <div className="col-xxl-6">
                            <div className="img-box4">
                                <div className="img1">
                                    <img src={AboutThumb41} alt="About" />
                                </div>
                                <div className="img2 movingX">
                                    <img src={AboutThumb42} alt="img" />
                                </div>
                                <div className="circle-tag">
                                    <span className="circle-title-anime">
                                        <svg viewBox="0 0 300 300" className="circle-svg">
                                            <defs>
                                                <path
                                                    id="circlePath"
                                                    d="M150,150 m-125,0 a125,125 0 1,1 250,0 a125,125 0 1,1 -250,0"
                                                />
                                            </defs>
                                            <text fill="#fff" fontSize="22" fontFamily="Arial">
                                                <textPath href="#circlePath" startOffset="0">
                                                    TUNO - AI AND AUTOMATION INTEGRATION.
                                                </textPath>
                                            </text>
                                        </svg>
                                    </span>
                                   

                                   <BannerModel/>
                                    
                                </div>
                                <div className="img3">
                                    <div className="thumb" data-delay="300">
                                        <img src={AboutThumb13} alt="About" />
                                    </div>
                                    <div className="shadow-text">Tuno</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="about-wrap4">
                                <div className="title-area mb-30" data-aos="fade-up">
                                    <span
                                        className="sub-title style2 before-none text-anim"
                                        data-delay="200"
                                    >
                                        About Us
                                    </span>
                                    <h2
                                        ref={aboutHeadRef}
                                        className="sec-title mb-0 text-anim2"
                                        data-delay="300"
                                    >
                                        {/* {text.split("").map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${aboutVisible ? "visible" : ""
                                                    }`}
                                                style={{animationDelay: `${index * delay}ms`}}
                                            >
                                                {letter === " " ? "\u00A0" : letter}
                                            </span>
                                        ))} */}

                                         {text.split(' ').map((word, wordIndex) => (
                                    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
                                      {word.split('').map((letter, letterIndex) => {
                                       const currentIndex = letterCount++; // unique index for animation delay
                                        return (
                                          <span
                                            key={currentIndex}
                                            className={`animated-letter ${aboutVisible ? 'visible' : ''}`}
                                            style={{ animationDelay: `${currentIndex * delay}ms` }}
                                          >
                                            {letter}
                                          </span>
                                        );
                                      })}
                                      <span>&nbsp;</span> {/* Add space between words */}
                                    </span>
                                  ))}
                                    </h2>
                                    <p className="mt-15" data-delay="400">
                                        TUNO is built to help businesses automate conversations,
                                        streamline customer support, and enhance user experience
                                        using advanced AI voice technology. Our solutions are
                                        designed for performance, reliability, and personalization.{" "}
                                    </p>
                                </div>
                                <div className="about-feature-card-wrap">
                                    <div className="about-feature-card" data-aos="fade-up">
                                        <div className="box-icon">
                                            <div className="color-masking">
                                                {/* <div className="masking-src"  data-mask-src={AboutFeatureIcon11}></div> */}
                                                <img src={AboutFeatureIcon11} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="box-title"> 99% Voice Accuracy </h4>
                                            <p className="box-text">
                                                TUNO ensures clear and natural voice interactions using
                                                deep learning models and real-time language adaptation.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="about-feature-card"
                                        data-aos="fade-up"
                                        data-delay="1200"
                                    >
                                        <div className="box-icon">
                                            <div className="color-masking">
                                                {/* <div className="masking-src"  data-mask-src={AboutFeatureIcon12}></div> */}
                                                <img src={AboutFeatureIcon12} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="box-title">24/7 Automation Support </h4>
                                            <p className="box-text">
                                                Always-on voice AI that scales with your business
                                                needs—no downtime, no delays, just seamless
                                                communication.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-wrap mt-40">
                                    <a className="th-btn text-decoration-none" href="about.html">
                                        Explore Features{" "}
                                        <i className="far fa-long-arrow-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us section end */}

            {/*counter section start */}
            {/* <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}> */}
            <div className="counter-area-2 space-bottom overflow-hidden">
                <div className="container">
                    <div className="counter-wrap2">
                        {[
                            { end: 72, suffix: "M", text: " Voice Interactions Handled" },
                            { end: 12, suffix: "k", text: "Client Integrations" },
                            { end: 85, suffix: "M", text: "Seconds of Talk Time" },
                            { end: 10, suffix: "k", text: "Intent Triggers" },
                            { end: 42, suffix: "M", text: "Hours Saved" },
                        ].map((item, index) => (
                            <div
                                className="counter-card2 style2"
                                key={index}
                                data-aos="fade-up"
                            >
                                <div className="media-body">
                                    <h2 className="box-number">
                                        {!counterOn && (
                                            <CountUp
                                                start={0}
                                                end={item.end}
                                                duration={2}
                                                suffix={item.suffix}
                                                enableScrollSpy
                                            />
                                        )}
                                    </h2>
                                    <p className="box-text">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* </ScrollTrigger> */}
            {/*counter section end */}

            {/* work process start */}
            <section
                className="position-relative space bg-smoke overflow-hidden"
                style={{ backgroundImage: `url(${Aboutbg11})` }}
            >
                <div className="container">
                    <div className="row gy-60 gx-80 align-items-center flex-row-reverse">
                        <div className="col-xl-6">
                            <div className="process-img-box2" data-aos="fade-left">
                                <img src={about_work_process} alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-35">
                                <span className="sub-title style2 before-none text-anim">
                                    Work Process
                                </span>
                                <h2
                                    ref={workProcessHeadRef}
                                    className="sec-title mb-0 text-anim2 heading-letters"
                                >
                                    {/* {text2.split("").map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`animated-letter ${workHeadVisible ? "visible" : ""
                                                }`}
                                            style={{ animationDelay: `${index * delay}ms` }}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    ))} */}

                                      {text2.split(' ').map((word, wordIndex) => (
                                    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
                                      {word.split('').map((letter, letterIndex) => {
                                         const currentIndex = letterCount++;// unique index for animation delay
                                        return (
                                          <span
                                            key={currentIndex}
                                            className={`animated-letter ${workHeadVisible ? 'visible' : ''}`}
                                            style={{ animationDelay: `${currentIndex * delay}ms` }}
                                          >
                                            {letter}
                                          </span>
                                        );
                                      })}
                                      <span>&nbsp;</span> {/* Add space between words */}
                                    </span>
                                  ))}
                                </h2>
                                <p className="mt-15">
                                    Choosing us means partnering with a forward-thinking team
                                    that’s as invested in your success as you are. Together, we’ll
                                    unlock the full potential of AI to transform your business.
                                </p>
                            </div>
                            <div className="process-wrap2">
                                <div className="process-card2">
                                    <div className="process-arrow">
                                        <img src={ProcessArrow21} alt="icon" />
                                    </div>
                                    <span className="box-number">1</span>
                                    <div className="box-content" data-aos="fade-up">
                                        <h3 className="box-title">Voice Strategy Planning</h3>
                                        <p className="box-text">
                                            We identify voice automation goals tailored to your
                                            industry needs
                                        </p>
                                    </div>
                                </div>
                                <div className="process-card2">
                                    <div className="process-arrow">
                                        <img src={ProcessArrow22} alt="icon" />
                                    </div>
                                    <span className="box-number">2</span>
                                    <div className="box-content" data-aos="fade-up">
                                        <h3 className="box-title">Custom Bot Development</h3>
                                        <p className="box-text">
                                            {" "}
                                            TUNO designs your branded voice agent with smart workflows
                                            and tone adaptation.
                                        </p>
                                    </div>
                                </div>
                                <div className="process-card2">
                                    <div className="process-arrow">
                                        <img src={ProcessArrow21} alt="icon" />
                                    </div>
                                    <span className="box-number">3</span>
                                    <div className="box-content" data-aos="fade-up">
                                        <h3 className="box-title">Launch & Optimize</h3>
                                        <p className="box-text">
                                            We deploy across channels, monitor analytics, and optimize
                                            for performance and user delight.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* work process start */}

            {/* out experts team start */}
            <section
                className="space bg-title overflow-hidden team-bg-theme"
                id="team-sec"
                style={{ backgroundImage: `url(${Teambg3})` }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="title-area text-center">
                                <span className="sub-title2 text-theme text-uppercase mb-30">
                                    AI Expert Team
                                </span>
                                <h2
                                    ref={expertHeadRef}
                                    className="sec-title text-white fw-bold text-anim2 heading-letters"
                                >
                                    {/* {text3_experts.split("").map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`animated-letter ${expertHeadVisible ? "visible" : ""
                                                }`}
                                            style={{ animationDelay: `${index * delay}ms` }}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    ))} */}

                                       {text3_experts.split(' ').map((word, wordIndex) => (
                                    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
                                      {word.split('').map((letter, letterIndex) => {
                                         const currentIndex = letterCount++; // unique index for animation delay
                                        return (
                                          <span
                                            key={currentIndex}
                                            className={`animated-letter ${expertHeadVisible ? 'visible' : ''}`}
                                            style={{ animationDelay: `${currentIndex * delay}ms` }}
                                          >
                                            {letter}
                                          </span>
                                        );
                                      })}
                                      <span>&nbsp;</span> {/* Add space between words */}
                                    </span>
                                  ))}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card">
                                <div className="team-img">
                                    <img src={team11} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title">
                                        <a href="team-details.html">Alex Javed</a>
                                    </h3>
                                </div>
                                <div className="th-social">
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://facebook.com/"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://twitter.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://instagram.com/"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://whatsapp.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card">
                                <div className="team-img">
                                    <img src={team12} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title">
                                        <a href="team-details.html">Jenny William</a>
                                    </h3>
                                </div>
                                <div className="th-social">
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://facebook.com/"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://twitter.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://instagram.com/"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://whatsapp.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card">
                                <div className="team-img">
                                    <img src={team13} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title">
                                        <a href="team-details.html">Daniel Thomas</a>
                                    </h3>
                                </div>
                                <div className="th-social">
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://facebook.com/"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://twitter.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://instagram.com/"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://whatsapp.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card">
                                <div className="team-img">
                                    <img src={team14} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title">
                                        <a href="team-details.html">Jessica Lauren</a>
                                    </h3>
                                </div>
                                <div className="th-social">
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://facebook.com/"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://twitter.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://instagram.com/"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        className="text-decoration-none"
                                        target="_blank"
                                        href="https://whatsapp.com/"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* out experts team start */}

            {/* advance technology start */}
            <section className="space bg-smoke overflow-hidden">
                <div className="container">
                    <div className="row gy-60 gx-80 flex-row-reverse">
                        <div className="col-xxl-6 align-self-end">
                            <div className="feature-img-box4">
                                <div className="row gy-4" data-aos="fade-left">
                                    <div className="col-md-6">
                                        <div className="img1">
                                            <img src={advance_technology1} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img2 mb-4">
                                            <img src={advance_technology2} alt="img" />
                                        </div>
                                        <div className="img3">
                                            <img src={advance_technology3} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="title-area">
                                <span className="sub-title before-none text-uppercase mb-30">
                                    Advanced Technology
                                </span>
                                <h2
                                    ref={advanceTechHeadRef}
                                    className="sec-title fw-bold text-anim2 heading-letters"
                                >
                                    {/* {text4_advancetech.split("").map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`animated-letter ${advanceTechHeadVisible ? "visible" : ""
                                                }`}
                                            style={{ animationDelay: `${index * delay}ms`}}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    ))} */}

                                      {text4_advancetech.split(' ').map((word, wordIndex) => (
                                    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
                                      {word.split('').map((letter, letterIndex) => {
                                         const currentIndex = letterCount++;// unique index for animation delay
                                        return (
                                          <span
                                            key={currentIndex}
                                            className={`animated-letter ${advanceTechHeadVisible ? 'visible' : ''}`}
                                            style={{ animationDelay: `${currentIndex * delay}ms` }}
                                          >
                                            {letter}
                                          </span>
                                        );
                                      })}
                                      <span>&nbsp;</span> {/* Add space between words */}
                                    </span>
                                  ))}
                                </h2>
                            </div>
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon41} alt="icon" />
                                        </div>
                                        <h3 className="box-title">Real-Time Speech Synthesis</h3>
                                        <p className="box-text">
                                            {" "}
                                            Fast, expressive voice output that adapts to emotions and
                                            tone.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon42} alt="icon" />
                                        </div>
                                        <h3 className="box-title">
                                            Natural Language Understanding
                                        </h3>
                                        <p className="box-text">
                                            {" "}
                                            Our AI understands intent, context, and multilingual
                                            inputs.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon43} alt="icon" />
                                        </div>
                                        <h3 className="box-title">
                                            Voice Cloning & Personalization
                                        </h3>
                                        <p className="box-text">
                                            Deliver unique brand voices with secure cloning
                                            technology.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon44} alt="icon" />
                                        </div>
                                        <h3 className="box-title">Omnichannel Deployment</h3>
                                        <p className="box-text">
                                            Deploy voicebots across IVR, WhatsApp, web, and smart
                                            devices.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* advance technology end */}

            {/* faq start */}
            <div className="overflow-hidden space-top overflow-hidden">
                <div className="container">
                    <div className="row gy-40">
                        <div className="col-xxl-6">
                            <div className="title-area">
                                <span className="sub-title style2 before-none text-anim">
                                    Faq’s
                                </span>
                                <h2
                                    ref={faqHeadRef}
                                    className="sec-title text-anim2 heading-letters"
                                >
                                    {/* {text_faq.split("").map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`animated-letter ${faqHeadVisible ? "visible" : ""
                                                }`}
                                            style={{
                                                animationDelay: `${index * delay}ms`}}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    ))} */}

                                      {text_faq.split(' ').map((word, wordIndex) => (
                                    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
                                      {word.split('').map((letter, letterIndex) => {
                                       const currentIndex = letterCount++; // unique index for animation delay
                                        return (
                                          <span
                                            key={currentIndex}
                                            className={`animated-letter ${faqHeadVisible ? 'visible' : ''}`}
                                            style={{ animationDelay: `${currentIndex * delay}ms` }}
                                          >
                                            {letter}
                                          </span>
                                        );
                                      })}
                                      <span>&nbsp;</span> {/* Add space between words */}
                                    </span>
                                  ))}
                                </h2>
                            </div>
                        </div>
                        <div className="col-xxl-6 align-self-center">
                            <div className="img-box1">
                                {/* <div className="img2" >
                                    <img src={AboutThumb13} alt="About" />
                                </div> */}
                                {/* <div className="shadow-text">Robor</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="faq-wrap1">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-card" data-aos="fade-up">
                                <div className="accordion-header" id="collapse-item-1">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse-1"
                                        aria-expanded="true"
                                        aria-controls="collapse-1"
                                    >
                                        What industries does TUNO support?
                                    </button>
                                    <span className="icon ms-auto"></span>{" "}
                                </div>
                                <div
                                    id="collapse-1"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="collapse-item-1"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            TUNO works across e-commerce, healthcare, logistics,
                                            finance, and more—adapting voice automation to each
                                            sector’s communication needs.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-card" data-aos="fade-up">
                                <div className="accordion-header" id="collapse-item-2">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse-2"
                                        aria-expanded="false"
                                        aria-controls="collapse-2"
                                    >
                                        Can I integrate TUNO with my existing systems?{" "}
                                    </button>
                                    <span className="icon ms-auto"></span>
                                </div>
                                <div
                                    id="collapse-2"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="collapse-item-2"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            Yes. TUNO offers easy API and webhook support to integrate
                                            with CRMs, ERPs, and messaging platforms.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-card" data-aos="fade-up">
                                <div className="accordion-header" id="collapse-item-3">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse-3"
                                        aria-expanded="false"
                                        aria-controls="collapse-3"
                                    >
                                        What languages and accents are supported?{" "}
                                    </button>
                                    <span className="icon ms-auto"></span>
                                </div>
                                <div
                                    id="collapse-3"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="collapse-item-3"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            We support 40+ languages and regional accents with
                                            emotion-aware speech output.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-card" data-aos="fade-up">
                                <div className="accordion-header" id="collapse-item-4">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse-4"
                                        aria-expanded="false"
                                        aria-controls="collapse-4"
                                    >
                                        Is voice data secure with TUNO?{" "}
                                    </button>
                                    <span className="icon ms-auto"></span>
                                </div>
                                <div
                                    id="collapse-4"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="collapse-item-4"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            Absolutely. All interactions are encrypted and
                                            GDPR-compliant, with optional on-premise deployment.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq end */}

            <BlogSlider />
            {/* news and blog start */}
            {/* 
                <section className="space overflow-hidden" id="blog-sec">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 col-lg-8">
                                <div className="title-area">
                                    <span className="sub-title style2 before-none text-anim">News</span>
                                    <h2 ref={blogHeadRef} className="sec-title text-anim heading-letters">
                                        {text_blog.split('').map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${blogHeadVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * delay}ms` ,fontSize: '50px'}}
                                                >
                                                {letter === ' ' ? '\u00A0' : letter}
                                            </span>
                                        ))}
                                    </h2>
                                </div>
                            </div>
                        <div className="col-auto align-self-end">
                            <div className="sec-btn">
                                <a href="blog.html" className="th-btn style-border text-decoration-none">View All Post <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xl-4 col-lg-6" >
                            <div className="blog-card" data-aos="fade-up">
                                <div className="blog-img">
                                    <a href="blog-details.html" className="text-decoration-none">
                                    <img src={Blog11} alt="blog image" /></a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a className="text-decoration-none" href="blog.html"><FontAwesomeIcon icon={faCalendar} className="me-2"/>24 Jan, 2025</a>
                                        <a className="text-decoration-none" href="blog.html"><FontAwesomeIcon icon={faUser} className="me-2"/>by admin</a>
                                    </div>
                                    <h3 className="box-title">
                                        <a className="text-decoration-none" href="blog-details.html">The rise of AI and Robotics in retail customer experiences</a>
                                    </h3>
                                    <a href="blog-details.html" className="link-btn style4">Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6" >
                            <div className="blog-card" data-aos="fade-up">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src={Blog12} alt="blog image" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a className="text-decoration-none" href="blog.html"><FontAwesomeIcon icon={faCalendar} className="me-2"/>24 Jan, 2025</a>
                                        <a className="text-decoration-none" href="blog.html"><FontAwesomeIcon icon={faUser} className="me-2" />by admin</a>
                                    </div>
                                    <h3 className="box-title">
                                        <a className="text-decoration-none" href="blog-details.html">How AI is Transforming Businesses Across Industries</a></h3>
                                    <a href="blog-details.html" className="link-btn style4 text-decoration-none">Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6" >
                            <div className="blog-card" data-aos="fade-up">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src={Blog13} alt="blog image" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a className="text-decoration-none" href="blog.html"><FontAwesomeIcon icon={faCalendar} className="me-2"/>24 Jan, 2025</a>
                                        <a className="text-decoration-none" href="blog.html"><FontAwesomeIcon icon={faUser} className="me-2" />by admin</a>
                                    </div>
                                    <h3 className="box-title">
                                        <a className="text-decoration-none" href="blog-details.html">Understanding Deep Learning and Neural Networks in AI</a></h3>
                                    <a  href="blog-details.html" className="link-btn style4 text-decoration-none">Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            */}
            {/* news and blog start */}
        </>
    );
}

export default About;
