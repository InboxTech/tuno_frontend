import React from "react";
import Breadcumbs from "../components/Breadcumbs";
import project3_1 from "../assets/img/project/project3-1.jpg";
import project3_2 from "../assets/img/project/project3-2.jpg";
import project3_3 from "../assets/img/project/project3-3.jpg";
import project3_4 from "../assets/img/project/project3-4.jpg";
import project3_5 from "../assets/img/project/project3-5.jpg";

const Project = () => {
  const projectItems = [
    {
      img: project3_1,
      subtitle: "Banking Sector",
      title: "Decreased customer verification time by 50% ",
    },
    {
      img: project3_2,
      subtitle: "Healthcare Client",
      title: "Automated prescription refill reminders ",
    },
    {
      img: project3_3,
      subtitle: "E-commerce Brand",
      title: "42% increase in post-purchase engagement ",
    },
    {
      img: project3_4,
      subtitle: "Travel & Airlines",
      title: "Shortened itinerary response time by 55%",
    },
    {
      img: project3_5,
      subtitle: "EdTech Platform",
      title: "2x increase in lead conversions during admission driv",
    },
  ];
  return (
    <React.Fragment>
      <Breadcumbs prevLink="Home" currentLink="Project " pageTitle="Project " />
      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8">
              <div className="title-area text-center">
                <div className="shadow-title style2">Case</div>
                <span className="sub-title text-anim">Case Study</span>
                <h2 className="sec-title text-anim2">AI Projects Case Study</h2>
                <p className="sec-text">
                  TUNO is a cutting-edge AI voice technology partner, delivering
                  tailored automation to help businesses streamline operations,
                  make smarter decisions, and create seamless customer
                  experiences. Leveraging the power of conversational AI, we
                  bring industry-specific innovation that transforms the way
                  work gets done—efficiently and intelligently
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-80 gy-60 justify-content-center">
            {projectItems?.map((p) => (
              <div className="col-md-6">
                <div className="project-card2">
                  <div className="box-img">
                    <img src={p.img} alt="img" />
                    <a href="#" className="icon-btn">
                      <i className="fal fa-arrow-up-right" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">{p.subtitle}</p>
                    <h3 className="box-title">
                      <a href="3">{p.title}</a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Project;
