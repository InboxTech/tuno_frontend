import React,{useState,useRef,useEffect} from "react";
import whyThumbShape31 from "../assets/img/shape/why-thumb-shape3-1.png";
// import theerOne from "../assets/img/feature/3-1.png";
import Healthcare from "../assets/img/feature/Healthcare.jpg";

// import threeTwo from "../assets/img/feature/3-2.png";
import finance_Banking from "../assets/img/feature/finance_Banking.jpg";

// import threeThree from "../assets/img/feature/3-3.png";
import Education from "../assets/img/feature/Education.jpg";

// import threeFour from "../assets/img/feature/3-4.png";
import BPO_Callcenter from "../assets/img/feature/BPO_Callcenter.jpg";

// import threeFive from "../assets/img/feature/3-5.png";
import Travel_hospitality from "../assets/img/feature/Travel_hospitality.jpg";

// import threeSix from "../assets/img/feature/3-6.png";
import e_commarce_retail from "../assets/img/feature/e_commarce_retail.jpg";
import Logistics_Pharma from "../assets/img/feature/Logistics_Pharma.jpg";


const IndustrieServe = () => {
   const title ="Industries Where ai is optimizing the Processes"
          const delay = 50;
let letterCount = 0;
      
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
    <React.Fragment>
      <section className="space overflow-hidden">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <div
                className="title-area"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <span className="sub-title2 text-gradient text-uppercase mb-30">
                  Industries We Serve
                </span>
                <h2 ref={titleRef} className="sec-title style2 fw-bold text-uppercase text-anim2">
                   {/* {title.split('').map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${titleVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * delay}ms`}}
                                                >
                                                {letter === ' ' ? '\u00A0' : letter}
                                                </span>
                                        ))} */}


                                        {title.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
      {word.split('').map((letter, letterIndex) => {
        const currentIndex = letterCount++;  // unique index for animation delay
        return (
          <span
            key={currentIndex}
            className={`animated-letter ${titleVisible ? 'visible' : ''}`}
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
            <div className="col-xl-4">
              <div
                className="title-area text-start"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <p>
                  Our AI agency is a cutting-edge technology partner that
                  specializes in delivering artificial intelligence solutions to
                  help businesses streamline operations, improve
                  decision-making, and enhance customer experiences. By
                  leveraging the power of AI, we aim to revolutionize
                  industries.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-wrap3">
            <ul className="nav nav-tabs feature-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="feature-tab1" data-bs-toggle="tab" data-bs-target="#featureTab1" type="button" role="tab" aria-controls="featureTab"
                  aria-selected="true" > <span className="box-number">#01</span>Healthcare AI </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="feature-tab2" data-bs-toggle="tab" data-bs-target="#featureTab2" type="button" role="tab" aria-controls="featureTab2" 
                  aria-selected="false" > <span className="box-number">#02</span>Banking & Finance </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="feature-tab3" data-bs-toggle="tab" data-bs-target="#featureTab3" type="button" role="tab" aria-controls="featureTab3"
                  aria-selected="false" > <span className="box-number">#03</span>E-commerce Ai </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="feature-tab4" data-bs-toggle="tab" data-bs-target="#featureTab4" type="button" role="tab" aria-controls="featureTab4"
                  aria-selected="false" > <span className="box-number">#04</span>Education Ai </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="feature-tab5" data-bs-toggle="tab" data-bs-target="#featureTab5" type="button" role="tab" aria-controls="featureTab5"
                  aria-selected="false" > <span className="box-number">#05</span>BPOs & Call Centers </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="feature-tab6" data-bs-toggle="tab" data-bs-target="#featureTab6" type="button" role="tab" aria-controls="featureTab6"
                  aria-selected="false" > <span className="box-number">#06</span>Travel & Hospitality </button> 
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="feature-tab7" data-bs-toggle="tab" data-bs-target="#featureTab7" type="button" role="tab" aria-controls="featureTab7"
                  aria-selected="false" > <span className="box-number">#07</span> Logistics & Pharma </button>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="featureTab1" role="tabpanel" aria-labelledby="feature-tab1" >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div className="feature-tab-thumb"
                   // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{ 
                      WebkitMaskImage: `url(${whyThumbShape31})`, 
                    maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={Healthcare} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Healthcare Ai</h4>
                    <p className="box-text">
                      Voice AI that assists in clinical documentation, patient
                      support, appointment reminders, and treatment
                      personalization. TUNO helps healthcare providers reduce
                      admin time, increase patient engagement, and deliver
                      better outcomes with real-time, secure voice automation
                    </p>

                    <div className="btn-wrap mt-40">
                      <a className="icon-btn style4" href="service-details.html" >
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="featureTab2" role="tabpanel" aria-labelledby="feature-tab2" >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div className="feature-tab-thumb" 
                  // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={finance_Banking} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Banking & Finance</h4>
                    <p className="box-text">
                      TUNO enables banks and fintech firms to automate routine
                      queries, support KYC, and streamline loan servicing.
                    </p>
                    <p className="box-text mt-30">
                      Our voice AI ensures secure, compliant, and fast customer
                      interactions—freeing up agents for high-value tasks while
                      delivering 24/7 financial assistance.
                    </p>
                    <div className="btn-wrap mt-40">
                      <a className="icon-btn style4" href="service-details.html" >
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="featureTab3"
                role="tabpanel"
                aria-labelledby="feature-tab3"
              >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={e_commarce_retail} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">E-commerce Ai</h4>
                    <p className="box-text">
                      AI voicebots manage order tracking, product discovery,
                      customer service, and post-sale feedback. TUNO enhances
                      shopping experiences by enabling instant, conversational
                      engagement that drives sales and reduces support costs
                    </p>

                    <div className="btn-wrap mt-40">
                      <a className="icon-btn style4" href="service-details.html">
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div> 
              <div className="tab-pane fade" id="featureTab4" role="tabpanel" aria-labelledby="feature-tab4" >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={Education} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Education Ai</h4>
                    <p className="box-text">
                      TUNO supports student engagement, smart tutoring, and
                      administrative automation in education. From inquiry
                      handling to attendance updates, our AI voice systems
                      improve learning outcomes and operational efficiency for
                      schools and ed-tech platforms.
                    </p>

                    <div className="btn-wrap mt-40">
                      <a className="icon-btn style4" href="service-details.html" >
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="featureTab5" role="tabpanel" aria-labelledby="feature-tab5" >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={BPO_Callcenter} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">BPOs & Call Centers </h4>
                    <p className="box-text">
                      TUNO enhances agent productivity with voicebots that
                      handle Tier-1 queries, surveys, and appointment calls.
                      With real-time responses and multi-language support, we
                      help call centers reduce wait times and boost customer
                      satisfaction at scale.
                    </p>

                    <div className="btn-wrap mt-40"> 
                      <a className="icon-btn style4" href="service-details.html" >
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="featureTab6" role="tabpanel" aria-labelledby="feature-tab6" >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div className="feature-tab-thumb"
                    // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={Travel_hospitality} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Travel & Hospitality </h4>
                    <p className="box-text">
                      From bookings to feedback collection, TUNO’s AI voice tech
                      handles guest queries, itinerary updates, and multilingual
                      support. We streamline the entire travel experience—making
                      every interaction faster, friendlier, and more
                      personalized
                    </p>

                    <div className="btn-wrap mt-40">
                      <a className="icon-btn style4" href="service-details.html" >
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="featureTab7" role="tabpanel" aria-labelledby="feature-tab7" >
                <div className="feature-tab-content-wrap" data-aos="fade-left">
                  <div className="feature-tab-thumb"
                   // data-mask-src="assets/img/shape/feature-thumb-shape3-1.png"
                    style={{
                      WebkitMaskImage: `url(${whyThumbShape31})`,
                      maskImage: `url(${whyThumbShape31})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                    }}
                  >
                    <img src={Logistics_Pharma} alt="img" />
                  </div>
                  <div className="feature-tab-content">
                    <h4 className="box-title">Logistics & Pharma </h4>
                    <p className="box-text">
                     TUNO automates dispatch alerts, inventory updates, and customer notifications in logistics and pharma. Our secure, voice-enabled systems reduce human error, speed up delivery chains, and improve last-mile coordination. 
                    </p>

                    <div className="btn-wrap mt-40">
                      <a className="icon-btn style4" href="service-details.html" >
                        <i className="fal fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IndustrieServe;
