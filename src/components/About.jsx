import React, {useState} from "react";
import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';
import BreadcumbBg from "../assets/img/bg/team-bg-2.jpg";
import AboutThumb41 from "../assets/img/normal/about-thumb4-1.jpg";
import AboutThumb42 from "../assets/img/normal/about-thumb4-2.jpg";
import AboutThumb13 from "../assets/img/normal/about-thumb1-3.jpg";
import AboutFeatureIcon11 from "../assets/img/icon/about-feature-icon1-1.svg";
import AboutFeatureIcon12 from "../assets/img/icon/about-feature-icon1-2.svg";
import Process21 from "../assets/img/process/process_2_1.jpg";
import ProcessArrow21 from "../assets/img/icon/process-arrow2-1.svg";
import ProcessArrow22 from "../assets/img/icon/process-arrow2-2.svg";
import team11 from "../assets/img/team/team_1_1.png";
import team12 from "../assets/img/team/team_1_2.png";
import team13 from "../assets/img/team/team_1_3.png";
import team14 from "../assets/img/team/team_1_4.png";
import feature41 from "../assets/img/feature/4-1.jpg";
import feature42 from "../assets/img/feature/4-2.jpg";
import feature43 from "../assets/img/feature/4-3.jpg";
import Featureicon41 from "../assets/img/icon/feature-icon4-1.svg";
import Featureicon42 from "../assets/img/icon/feature-icon4-2.svg";
import Featureicon43 from "../assets/img/icon/feature-icon4-3.svg";
import Featureicon44 from "../assets/img/icon/feature-icon4-4.svg";
import Blog11 from "../assets/img/blog/blog_1_1.jpg";
import Blog12 from "../assets/img/blog/blog_1_2.jpg";
import Blog13 from "../assets/img/blog/blog_1_3.jpg";
import Aboutbg11 from "../assets/img/bg/about-bg-1-1.png"
import Teambg3 from "../assets/img/bg/team-bg-3.jpg"
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function About() {
   const [counterOn, setCounterOn] = useState(false)
    
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

            <div
                className="breadcumb-wrapper background-image"
                data-overlay="black"
                data-opacity="7"
                style={{ backgroundImage: `url(${BreadcumbBg})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title text-anim" data-delay="100" data-show="true"
                                    style={{
                                        animationName: 'slideInUp',
                                        animationDuration: '900ms',
                                        animationTimingFunction: 'ease',
                                        animationDelay: '100ms',
                                        animationDirection: 'normal',
                                        animationFillMode: 'both',
                                    }}
                                >
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        {'About'.split('').map((letter, index) => (
                                            <div
                                                key={`about-${index}`}
                                                style={{
                                                    position: 'relative',
                                                    display: 'inline-block',
                                                    transform: 'translate(0px, 0px)',
                                                    opacity: 1,
                                                    visibility: 'inherit',
                                                }}
                                            >
                                                {letter}
                                            </div>
                                        ))}
                                    </div>{' '}
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        {'Us'.split('').map((letter, index) => (
                                            <div key={`us-${index}`}
                                                style={{
                                                    position: 'relative',
                                                    display: 'inline-block',
                                                    transform: 'translate(0px, 0px)',
                                                    opacity: 1,
                                                    visibility: 'inherit',
                                                }}
                                            >
                                                {letter}
                                            </div>
                                        ))}
                                    </div>
                                </h1>
                                <ul className="breadcumb-menu" data-delay="300" data-show="true"
                                    style={{
                                        animationName: 'slideInUp',
                                        animationDuration: '900ms',
                                        animationTimingFunction: 'ease',
                                        animationDelay: '300ms',
                                        animationDirection: 'normal',
                                        animationFillMode: 'both',
                                    }}
                                >
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us section start */}
            <div className="overflow-hidden space overflow-hidden" id="about-sec">
                <div className="container">
                    <div className="row gy-60 gx-80 align-items-start">
                        <div className="col-xxl-6">
                            <div className="img-box4" >
                                <div className="img1">
                                    <img src={AboutThumb41} alt="About" />
                                </div>
                                <div className="img2 movingX">
                                    <img src={AboutThumb42} alt="img" />
                                </div>
                                <div className="circle-tag">
                                    <span className="circle-title-anime">
                                        ROBOR - AI AND AUTOMATION INTEGRATION.
                                    </span>
                                    <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video">
                                         <FontAwesomeIcon icon={faPlay} />
                                    </a></div>
                                <div className="img3">
                                    <div className="thumb"  data-delay="300">
                                        <img src={AboutThumb13} alt="About" />
                                    </div>
                                    <div className="shadow-text">Robor</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="about-wrap4">
                                <div className="title-area mb-30"><span className="sub-title style2 before-none text-anim"
                                   data-delay="200">About Us</span>
                                    <h2 className="sec-title mb-0 text-anim2" data-delay="300">Leading the
                                        Future of Business Innovation with Tailor-Made AI Solutions</h2>
                                    <p className="mt-15"  data-delay="400">We begin by understanding your
                                        business goals, challenges, and opportunities for AI integration. Our experts assess
                                        your current systems and identify areas where AI can bring the most impact. Our team
                                        designs a tailor-made AI solution based on your specific requirements. We develop
                                        machine learning models, build algorithms, and create prototypes to ensure the solution
                                        aligns with your business objectives.</p>
                                </div>
                                <div className="about-feature-card-wrap">
                                    <div className="about-feature-card" >
                                        <div className="box-icon">
                                            <div className="color-masking">
                                              <div className="masking-src"  data-mask-src={AboutFeatureIcon11}></div>
                                                <img src={AboutFeatureIcon11} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="box-title">100% Customers Satisfaction</h4>
                                            <p className="box-text">We bring a team of experienced AI specialists, data scientists,
                                                and industry experts committed to pushing.</p>
                                        </div>
                                    </div>
                                    <div className="about-feature-card"  data-delay="300">
                                        <div className="box-icon">
                                            <div className="color-masking">
                                                <div className="masking-src"  data-mask-src={AboutFeatureIcon12}></div>
                                                <img src={AboutFeatureIcon12} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="box-title">Quality Assurance Guarantee</h4>
                                            <p className="box-text">We bring a team of experienced AI specialists, data scientists,
                                                and industry experts committed to pushing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-wrap mt-40" >
                                    <a className="th-btn" href="about.html">More About Us <i className="far fa-long-arrow-right ms-2"></i></a>
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
                            { end: 68, suffix: "M", text: "Project Completed" },
                            { end: 16, suffix: "k", text: "Creative Minds" },
                            { end: 62, suffix: "M", text: "Happy Customers" },
                            { end: 7, suffix: "k", text: "Innovative Projects" },
                            { end: 38, suffix: "M", text: "Collaborative Team" },
                        ].map((item, index) => (
                            <div
                            className="counter-card2 style2"
                            key={index}
                            >
                            <div className="media-body">
                                <h2 className="box-number">
                               {!counterOn && <CountUp
                                    start={0}
                                    end={item.end}
                                    duration={2}
                                    suffix={item.suffix}
                                    enableScrollSpy
                                />}
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
            <section className="position-relative space bg-smoke overflow-hidden" style={{ backgroundImage: `url(${Aboutbg11})` }}>
                <div className="container">
                    <div className="row gy-60 gx-80 align-items-center flex-row-reverse">
                        <div className="col-xl-6">
                            <div className="process-img-box2">
                                <img src={Process21} alt="img" /></div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-35"><span className="sub-title style2 before-none text-anim"
                                >Work Process</span>
                                <h2 className="sec-title mb-0 text-anim2" >How Dose it Work?</h2>
                                <p className="mt-15" >Choosing us means partnering with a forward-thinking team
                                    that’s as invested in your success as you are. Together, we’ll unlock the full potential of
                                    AI to transform your business.</p>
                            </div>
                            <div className="process-wrap2">
                                <div className="process-card2" >
                                    <div className="process-arrow">
                                        <img src={ProcessArrow21} alt="icon" />
                                    </div>
                                    <span className="box-number">1</span>
                                    <div className="box-content">
                                        <h3 className="box-title">Discovery and Strategy</h3>
                                        <p className="box-text">We start with in-depth discussions to understand your challenges,
                                            goals, and business processes.</p>
                                    </div>
                                </div>
                                <div className="process-card2" >
                                    <div className="process-arrow">
                                        <img src={ProcessArrow22} alt="icon" />
                                    </div>
                                    <span className="box-number">2</span>
                                    <div className="box-content">
                                        <h3 className="box-title">Development & Implementation</h3>
                                        <p className="box-text">We collect, clean, and analyze data to develop AI models tailored to
                                            your use case.</p>
                                    </div>
                                </div>
                                <div className="process-card2" >
                                    <div className="process-arrow">
                                        <img src={ProcessArrow21} alt="icon" />
                                    </div>
                                    <span className="box-number">3</span>
                                    <div className="box-content">
                                        <h3 className="box-title">Optimization and Support</h3>
                                        <p className="box-text">We continuously monitor the AI solution to ensure it delivers
                                            consistent and accurate results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* work process start */}


            {/* out experts team start */}
            <section className="space bg-title overflow-hidden team-bg-theme" id="team-sec"
                style={{ backgroundImage: `url(${Teambg3})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="title-area text-center"><span className="sub-title2 text-theme text-uppercase mb-30"
                                >AI Expert Team</span>
                                <h2 className="sec-title text-white fw-bold text-anim2" >Our Expert Creative
                                    Minds</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card" >
                                <div className="team-img">
                                    <img src={team11} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Alex Javed</a></h3>
                                </div>
                                <div className="th-social">
                                    <a target="_blank" href="https://facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a target="_blank" href="https://twitter.com/">  <FontAwesomeIcon icon={faTwitter}  /></a>
                                    <a target="_blank" href="https://instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a target="_blank" href="https://whatsapp.com/"> <FontAwesomeIcon icon={faWhatsapp}  /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card" >
                                <div className="team-img">
                                    <img src={team12} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Jenny William</a></h3>
                                </div>
                                <div className="th-social">
                                    <a target="_blank" href="https://facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a target="_blank" href="https://twitter.com/">  <FontAwesomeIcon icon={faTwitter}  /></a>
                                    <a target="_blank" href="https://instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a target="_blank" href="https://whatsapp.com/"> <FontAwesomeIcon icon={faWhatsapp}  /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card" >
                                <div className="team-img">
                                    <img src={team13} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Daniel Thomas</a></h3>
                                </div>
                                <div className="th-social">
                                     <a target="_blank" href="https://facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a target="_blank" href="https://twitter.com/">  <FontAwesomeIcon icon={faTwitter}  /></a>
                                    <a target="_blank" href="https://instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a target="_blank" href="https://whatsapp.com/"> <FontAwesomeIcon icon={faWhatsapp}  /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="th-team team-card" >
                                <div className="team-img">
                                    <img src={team14} alt="Team" />
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Jessica Lauren</a></h3>
                                </div>
                                <div className="th-social">
                                    <a target="_blank" href="https://facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a target="_blank" href="https://twitter.com/">  <FontAwesomeIcon icon={faTwitter}  /></a>
                                    <a target="_blank" href="https://instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a target="_blank" href="https://whatsapp.com/"> <FontAwesomeIcon icon={faWhatsapp}  /></a>
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
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="img1">
                                            <img src={feature41} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img2 mb-4">
                                            <img src={feature42} alt="img" />
                                        </div>
                                        <div className="img3">
                                            <img src={feature43} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="title-area">
                                <span className="sub-title before-none text-uppercase mb-30"
                                >Advanced Technology</span>
                                <h2 className="sec-title fw-bold text-anim2" >The Future is Here: Advance
                                    Technology</h2>
                            </div>
                            <div className="row gy-4">
                                <div className="col-md-6" >
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon41} alt="icon" />
                                        </div>
                                        <h3 className="box-title">Tech support</h3>
                                        <p className="box-text">To empower businesses with intelligent, scalable, and impactful
                                            solutions that drive progress</p>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon42} alt="icon" />
                                        </div>
                                        <h3 className="box-title">Robo Genius</h3>
                                        <p className="box-text">To empower businesses with intelligent, scalable, and impactful
                                            solutions that drive progress</p>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon43} alt="icon" />
                                        </div>
                                        <h3 className="box-title">Image Generation</h3>
                                        <p className="box-text">To empower businesses with intelligent, scalable, and impactful
                                            solutions that drive progress</p>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="feature-card style3">
                                        <div className="box-icon">
                                            <img src={Featureicon44} alt="icon" />
                                        </div>
                                        <h3 className="box-title">Chatbots</h3>
                                        <p className="box-text">To empower businesses with intelligent, scalable, and impactful
                                            solutions that drive progress</p>
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
                                <span className="sub-title style2 before-none text-anim"
                                >Faq’s</span>
                                <h2 className="sec-title text-anim2">Frequently asked questions</h2>
                            </div>
                        </div>
                        <div className="col-xxl-6 align-self-center">
                            <div className="img-box1">
                                <div className="img2" >
                                    <img src={AboutThumb13} alt="About" />
                                </div>
                                <div className="shadow-text">Robor</div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-wrap1">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-card" >
                                <div className="accordion-header" id="collapse-item-1">
                                    <button className="accordion-button"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1"
                                        aria-expanded="true" aria-controls="collapse-1">What is an AI startup, and what services
                                        do you offer?</button></div>
                                <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">An AI Software as a Service startup combines the scalability of
                                            cloud-based platforms with the power of artificial intelligence to deliver
                                            innovative, on-demand solutions. These startups cater to a wide range of industries
                                            by offering AI-driven tools and applications that solve specific business
                                            challenges, enhance efficiency, and drive data-informed decisions. The AI industry
                                            is rapidly expanding, with opportunities to disrupt traditional industries and
                                            create entirely new markets. Continuous advancements in hardware and algorithms
                                            position AI startups to play a pivotal role in shaping the future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-card" >
                                <div className="accordion-header" id="collapse-item-2">
                                    <button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2"
                                        aria-expanded="false" aria-controls="collapse-2">Do you offer pre-built AI models or
                                        create everything from scratch?</button>
                                </div>
                                <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">An AI Software as a Service startup combines the scalability of
                                            cloud-based platforms with the power of artificial intelligence to deliver
                                            innovative, on-demand solutions. These startups cater to a wide range of industries
                                            by offering AI-driven tools and applications that solve specific business
                                            challenges, enhance efficiency, and drive data-informed decisions. The AI industry
                                            is rapidly expanding, with opportunities to disrupt traditional industries and
                                            create entirely new markets. Continuous advancements in hardware and algorithms
                                            position AI startups to play a pivotal role in shaping the future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-card" >
                                <div className="accordion-header" id="collapse-item-3">
                                    <button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3"
                                        aria-expanded="false" aria-controls="collapse-3">What is the process for developing an
                                        AI solution for my business?</button>
                                </div>
                                <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">An AI Software as a Service startup combines the scalability of
                                            cloud-based platforms with the power of artificial intelligence to deliver
                                            innovative, on-demand solutions. These startups cater to a wide range of industries
                                            by offering AI-driven tools and applications that solve specific business
                                            challenges, enhance efficiency, and drive data-informed decisions. The AI industry
                                            is rapidly expanding, with opportunities to disrupt traditional industries and
                                            create entirely new markets. Continuous advancements in hardware and algorithms
                                            position AI startups to play a pivotal role in shaping the future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-card" >
                                <div className="accordion-header" id="collapse-item-4">
                                    <button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4"
                                        aria-expanded="false" aria-controls="collapse-4">What is an AI startup, and what
                                        services do you offer?</button>
                                </div>
                                <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="collapse-item-4"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">An AI Software as a Service startup combines the scalability of
                                            cloud-based platforms with the power of artificial intelligence to deliver
                                            innovative, on-demand solutions. These startups cater to a wide range of industries
                                            by offering AI-driven tools and applications that solve specific business
                                            challenges, enhance efficiency, and drive data-informed decisions. The AI industry
                                            is rapidly expanding, with opportunities to disrupt traditional industries and
                                            create entirely new markets. Continuous advancements in hardware and algorithms
                                            position AI startups to play a pivotal role in shaping the future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-card" >
                                <div className="accordion-header" id="collapse-item-5">
                                    <button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5"
                                        aria-expanded="false" aria-controls="collapse-5">How do you ensure data privacy and
                                        compliance with regulations?</button>
                                </div>
                                <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="collapse-item-5"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">An AI Software as a Service startup combines the scalability of
                                            cloud-based platforms with the power of artificial intelligence to deliver
                                            innovative, on-demand solutions. These startups cater to a wide range of industries
                                            by offering AI-driven tools and applications that solve specific business
                                            challenges, enhance efficiency, and drive data-informed decisions. The AI industry
                                            is rapidly expanding, with opportunities to disrupt traditional industries and
                                            create entirely new markets. Continuous advancements in hardware and algorithms
                                            position AI startups to play a pivotal role in shaping the future.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* faq end */}


             {/* news and blog start */}
            <section className="space overflow-hidden" id="blog-sec">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-8">
                            <div className="title-area">
                                <span className="sub-title style2 before-none text-anim">News</span>
                                <h2 className="sec-title text-anim">Our Latest News & Blog</h2>
                            </div>
                        </div>
                        <div className="col-auto align-self-end">
                            <div className="sec-btn">
                                <a href="blog.html" className="th-btn style-border">View All Post <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xl-4 col-lg-6" >
                            <div className="blog-card">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src={Blog11} alt="blog image" /></a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a href="blog.html"><FontAwesomeIcon icon={faCalendar} className="me-2"/>24 Jan, 2025</a>
                                        <a href="blog.html"><FontAwesomeIcon icon={faUser} className="me-2"/>by admin</a>
                                    </div>
                                    <h3 className="box-title">
                                        <a href="blog-details.html">The rise of AI and Robotics in retail customer experiences</a>
                                    </h3>
                                    <a href="blog-details.html" className="link-btn style4">Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6" >
                            <div className="blog-card">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src={Blog12} alt="blog image" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                       <a href="blog.html"><FontAwesomeIcon icon={faCalendar} className="me-2"/>24 Jan, 2025</a>
                                        <a href="blog.html"><FontAwesomeIcon icon={faUser} className="me-2" />by admin</a>
                                    </div>
                                    <h3 className="box-title">
                                        <a href="blog-details.html">How AI is Transforming Businesses Across Industries</a></h3>
                                    <a href="blog-details.html" className="link-btn style4">Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6" >
                            <div className="blog-card">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src={Blog13} alt="blog image" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <a href="blog.html"><FontAwesomeIcon icon={faCalendar} className="me-2"/>24 Jan, 2025</a>
                                        <a href="blog.html"><FontAwesomeIcon icon={faUser} className="me-2" />by admin</a>
                                        </div>
                                    <h3 className="box-title">
                                        <a href="blog-details.html">Understanding Deep Learning and Neural Networks in AI</a></h3>
                                    <a href="blog-details.html" className="link-btn style4">Read More <FontAwesomeIcon icon={faArrowRightLong} className="ms-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* news and blog start */}

        </>
    );
}

export default About;
