import React, {useRef, useState, useEffect} from 'react'
import Breadcumbs from "../components/Breadcumbs";
import { Link } from 'react-router-dom';
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import ServiceIcon11 from "../assets/img/icon/service/service_icon_1_1.svg";
import ServiceIcon12 from "../assets/img/icon/service/service_icon_1_2.svg";
import ServiceIcon13 from "../assets/img/icon/service/service_icon_1_3.svg";
import ServiceIcon14 from "../assets/img/icon/service/service_icon_1_4.svg";
import ServiceIcon15 from "../assets/img/icon/service/service_icon_1_5.svg";
import ServiceIcon16 from "../assets/img/icon/service/service_icon_1_6.svg";
import ServiceIcon17 from "../assets/img/icon/service/service_icon_1_7.svg";
import ServiceIcon18 from "../assets/img/icon/service/service_icon_1_8.svg";

function Service() {
    const serviceheading = "Smarter Voice Automation for a Seamless Future";
    const delay = 50;

    const serviceHeadRef = useRef(null);
      const [serviceHeadVisible, setServiceHeadVisible] = useState(false);
      
        //service intersersection observer
        useEffect(() => {
          const observerService = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setServiceHeadVisible(true);
                observerService.disconnect();
              }
            },
            { threshold: 0.3 } // Start animation when 30% of the heading is visible
          );
      
          if (serviceHeadRef.current) {
            observerService.observe(serviceHeadRef.current);
          }
      
          return () => observerService.disconnect();
          
        }, []);
  return (
    <>
    <Breadcumbs prevLink="Home" currentLink="Services" pageTitle="Services"/>


     <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-10">
                    <div className="title-area text-center">
                        {/* <div className="shadow-title">Services</div> */}
                        <span className="sub-title text-anim">OUR SERVICES</span>
                        <h2 ref={serviceHeadRef} className="sec-title text-anim2">
                           {serviceheading.split('').map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${serviceHeadVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * delay}ms`}}
                                                >
                                                {letter === ' ' ? '\u00A0' : letter}
                                                </span>
                                        ))}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row gy-4 justify-content-center" data-aos="fade-up">
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon11} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <a href="service.html">Conversational Voice AI </a>
                        </h3>
                        <p className="box-text">
                           TUNO creates lifelike voice interactions using advanced NLP, perfect for customer support, onboarding, and more. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon12} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <a href="service.html">Multilingual Voice Assistants </a>
                        </h3>
                        <p className="box-text">
                           Engage users globally with voicebots fluent in 40+ languages and dialects. Ideal for enterprises with a global reach. 
                        </p>
                        <a href="service-details.html" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></a>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon13} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <a href="service.html">AI-Powered IVR Systems</a>
                        </h3>
                        <p className="box-text">
                           Automate calls using intelligent routing and smart conversations. Reduce wait times and improve user satisfaction. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon14} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <a href="service.html">Voice Analytics & Insights </a>
                        </h3>
                        <p className="box-text">
                           Extract actionable insights from every voice interaction using emotion detection, speech pacing, and call trends. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon15} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <a href="service.html">Voice Integration for Apps</a>
                        </h3>
                        <p className="box-text">
                            Plug TUNO into mobile or web apps to deliver voice commands, feedback systems, and hands-free experiences. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon16} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <a href="service.html">Custom Voice Cloning </a>
                        </h3>
                        <p className="box-text">
                           Generate custom AI voices for your brand using ethical, secure cloning. Bring your identity to life with speech. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon17} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title"><a href="service.html">Smart Voice Scheduling </a></h3>
                        <p className="box-text">
                           Use TUNO to automate appointment reminders, follow-ups, or time-based notifications with natural-sounding voices. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon18} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <a href="service.html">Voice AI in E-Commerce </a>
                        </h3>
                        <p className="box-text">
                           Enable product discovery, order tracking, and customer care using conversational AI integrated with your platform. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <Pricing/>
        <Testimonial/>
    </>
  )
}

export default Service