import React, { useRef, useState, useEffect } from "react";
import Breadcumbs from "../components/Breadcumbs";
import { Link } from "react-router-dom";
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
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
function Service() {
  const { API, authorizationToken } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const getAllServices = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/api/admin/getService`, {
        method: "GET",
        // headers: {
        //   Authorization: authorizationToken,
        // },
      });

      if (response.ok) {
        const data = await response.json();
        setServices(Array.isArray(data) ? data : []);
      } else {
        throw new Error("Failed to fetch services");
      }
    } catch (error) {
      console.error("Services Error:", error);
      toast.error(error.message || "Error fetching services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <>
      <Breadcumbs prevLink="Home" currentLink="Services" pageTitle="Services" />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-10">
            <div className="title-area text-center">
              {/* <div className="shadow-title">Services</div> */}
              <span className="sub-title text-anim">OUR SERVICES</span>
              <h2 ref={serviceHeadRef} className="sec-title text-anim2">
                {serviceheading.split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`animated-letter ${
                      serviceHeadVisible ? "visible" : ""
                    }`}
                    style={{ animationDelay: `${index * delay}ms` }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center" data-aos="fade-up">
          {loading ? (
            <div className="text-center">
              <p>Loading services...</p>
            </div>
          ) : (
            services.map((service) => (
              <div className="col-xxl-3 col-xl-4 col-md-6" key={service._id}>
                <div className="service-card">
                  <div className="box-icon">
                    <div className="color-masking">
                      <img src={ServiceIcon11} alt="icon" />
                    </div>
                  </div>
                  <h3 className="box-title">
                    <Link to="#">{service.title}</Link>
                  </h3>
                  <p className="box-text">{service.short_description}</p>
                  <Link to="/service-details" className="link-btn style4">
                    Read More <i className="fas fa-long-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            ))
          )}

          {/* <div className="col-xxl-3 col-xl-4 col-md-6">
                    <div className="service-card">
                        <div className="box-icon">
                            <div className="color-masking">
                                <img src={ServiceIcon12} alt="icon" />
                            </div>
                        </div>
                        <h3 className="box-title">
                            <Link to="#">Multilingual Voice Assistants </Link>
                        </h3>
                        <p className="box-text">
                           Engage users globally with voicebots fluent in 40+ languages and dialects. Ideal for enterprises with a global reach. 
                        </p>
                        <Link to="#" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
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
                            <Link to="#">AI-Powered IVR Systems</Link>
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
                            <Link to="#">Voice Analytics & Insights </Link>
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
                            <Link to="#">Voice Integration for Apps</Link>
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
                            <Link to="#">Custom Voice Cloning </Link>
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
                        <h3 className="box-title"><Link to="#">Smart Voice Scheduling </Link></h3>
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
                            <Link to="#">Voice AI in E-Commerce </Link>
                        </h3>
                        <p className="box-text">
                           Enable product discovery, order tracking, and customer care using conversational AI integrated with your platform. 
                        </p>
                        <Link to="/service-details" className="link-btn style4">Read More <i
                                className="fas fa-long-arrow-right ms-2"></i></Link>
                    </div>
                </div> */}
        </div>
      </div>

      <Pricing />
      <Testimonial />
    </>
  );
}

export default Service;
