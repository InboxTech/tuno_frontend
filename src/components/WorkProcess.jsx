import React,{useState,useEffect,useRef} from "react";
// import process_1_1 from "../assets/img/process/process_1_1.jpg";
import discovery_consultation from "../assets/img/process/discovery_consultation.jpg";

// import process_1_2 from "../assets/img/process/process_1_2.jpg";
import solution_design_development from "../assets/img/process/solution_design_development.jpg";

// import process_1_3 from "../assets/img/process/process_1_3.jpg";
import implement_integration from "../assets/img/process/Implement_ integration.jpg";

// import process_1_4 from "../assets/img/process/process_1_4.jpg";
import monitoring_conti_improvement from "../assets/img/process/monitoring_conti_improvement.jpg";


const WorkProcess = () => {
   const workProcessTitle ="Our 4-Step Process for Delivering AI Solutions"
      const delay = 50;
    let letterCount = 0;
  
     const workProcessTitleRef = useRef(null);
      const [processTitleVisible, setProcessTitleVisible] = useState(false);
      //work process title intersersection observer
            useEffect(() => {
              const observerProcessTitle = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setProcessTitleVisible(true);
                    observerProcessTitle.disconnect();
                  }
                },
                { threshold: 0.3 } // Start animation when 30% of the heading is visible
              );
          
              if (workProcessTitleRef.current) {
                observerProcessTitle.observe(workProcessTitleRef.current);
              }
          
              return () => observerProcessTitle.disconnect();
              
            }, []);
  return (
    <React.Fragment>
      <section className="position-relative space overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <div className="shadow-title style4">PROCESS</div>
                <span className="sub-title2 text-gradient text-uppercase mb-30">
                  Work Process
                </span>
                <h2 ref={workProcessTitleRef} className="sec-title style2 fw-bold text-uppercase text-anim2">
                  {/* {workProcessTitle.split('').map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${processTitleVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * delay}ms`}}
                                                >
                                                {letter === ' ' ? '\u00A0' : letter}
                                                </span>
                                        ))} */}

                                 {workProcessTitle.split(' ').map((word, wordIndex) => (
                                    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
                                      {word.split('').map((letter, letterIndex) => {
                                        const currentIndex = letterCount++; // unique index for animation delay
                                        return (
                                          <span
                                            key={currentIndex}
                                            className={`animated-letter ${processTitleVisible ? 'visible' : ''}`}
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
          <div className="process-card-wrap">
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">1</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src={discovery_consultation} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <h3 className="box-title">Discovery &amp; Consultation</h3>
                <p className="box-text">
                  We start by deeply analyzing your business needs, workflows,
                  and goals—identifying where AI can add the most value with
                  minimal disruption.
                </p>
              </div>
            </div>
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">2</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <img src={solution_design_development} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="box-title">Solution Design &amp; Development</h3>
                <p className="box-text">
                  Custom AI solutions are designed around your operations. Our
                  team builds scalable, reliable voice systems tailored to your
                  use cases and infrastructure
                </p>
              </div>
            </div>
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">3</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <img src={implement_integration} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="box-title">Implementation &amp; Integration</h3>
                <p className="box-text">
                  We deploy and integrate AI solutions with your current tools
                  and platforms, ensuring seamless functionality and zero
                  operational downtime.
                </p>
              </div>
            </div>
            <div className="process-card">
              <div className="box-thumb-wrap">
                <h3 className="box-number">4</h3>
                <div
                  className="box-thumb"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <img src={monitoring_conti_improvement} alt="img" />
                </div>
              </div>
              <div
                className="box-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="box-title">
                  Monitoring &amp; Continuous Improvement
                </h3>
                <p className="box-text">
                  Post-launch, we monitor system performance and user
                  feedback—refining features and training models to improve
                  accuracy, speed, and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WorkProcess;
