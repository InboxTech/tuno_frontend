import React,{useState,useEffect,useRef} from "react";
import WhyThumbShap31 from "../assets/img/shape/why-thumb-shape3-1.png";
import whyThumbShape32 from "../assets/img/shape/why-thumb-shape3-2.png";
import WhyBg31 from "../assets/img/bg/why-bg-3-1.png";
// import whyThumb31 from "../assets/img/normal/why-thumb3-1.jpg";
import why_choose1 from "../assets/img/normal/Why_choose_Us1.jpg";

// import whyThumb32 from "../assets/img/normal/why-thumb3-2.jpg";
import why_choose2 from "../assets/img/normal/Why_choose_Us2.jpg";


const WhyChuse = () => {
  const title ="Our 4-Step Process for Delivering AI Solutions"
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
      <section className="why-sec3 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="why-wrap3">
            <div className="why-box3-1">
              <div
                className="img1"
                style={{
                  WebkitMaskImage: `url(${WhyThumbShap31})`,
                  maskImage: `url(${WhyThumbShap31})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={why_choose1} alt="img" />
              </div>
              <div
                className="img2"
                data-aos="fade-left"
                data-aos-duration="2000"
                style={{
                  WebkitMaskImage: `url(${whyThumbShape32})`,
                  maskImage: `url(${whyThumbShape32})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
              >
                <img src={why_choose2} alt="img" />
              </div>
            </div>
            <div
              className="why-wrap-content background-image"
              style={{ backgroundImage: `url(${WhyBg31})` }}
            >
              <div
                className="why-content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="title-area">
                  <span className="sub-title2 text-gradient text-uppercase mb-30">
                    Why Choose Us
                  </span>
                  <h2 ref={titleRef} className="sec-title style2 fw-bold text-uppercase text-anim2">
                   {/* {title.split('').map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${titleVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * delay}ms` }}
                                                >
                                                {letter === ' ' ? '\u00A0' : letter}
                                                </span>
                                        ))} */}

                                          {title.split(' ').map((word, wordIndex) => (
                                    <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap' }}>
                                      {word.split('').map((letter, letterIndex) => {
                                        const currentIndex = letterCount++; // unique index for animation delay
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
                  <p>
                    TUNO is your cutting-edge technology partner in the AI voice
                    automation space. We combine advanced artificial
                    intelligence with deep domain knowledge to deliver smart,
                    adaptive, and impactful voice solutions that drive real
                    business results. Our mission is to make voice interactions
                    faster, smarter, and effortlessly scalable.
                  </p>
                </div>
                <div
                  className="why-feature-wrap3"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <div className="why-feature-card">
                    <h4 className="box-title">Expertise</h4>
                    <p className="box-text">
                      Our experienced team has delivered AI solutions across
                      industries with precision and proven impact.
                    </p>
                  </div>
                  <div className="why-feature-card">
                    <h4 className="box-title">Customization</h4>
                    <p className="box-text">
                      We craft solutions tailored to your goals, ensuring AI
                      fits your workflows—not the other way around.
                    </p>
                  </div>
                  <div className="why-feature-card">
                    <h4 className="box-title">Innovation</h4>
                    <p className="box-text">
                      We constantly adopt the latest in AI tech to keep your
                      solutions ahead in performance and reliability.
                    </p>
                  </div>
                  <div className="why-feature-card">
                    <h4 className="box-title">Scalability</h4>
                    <p className="box-text">
                      Our platforms scale effortlessly, supporting your business
                      growth without compromising performance.
                    </p>
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

export default WhyChuse;
