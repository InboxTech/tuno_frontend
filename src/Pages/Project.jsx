import React from "react";
import Breadcumbs from "../components/Breadcumbs";
import { useAuth } from "../store/auth";;
import { Link } from "react-router-dom";

const Project = () => {
  
    const {projectItems,API } = useAuth();
   
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
                    <img src={`${API}${p.projectImage}`} alt="img" />
                    <Link to={`/project/${p._id}`} className="icon-btn">
                      <i className="fal fa-arrow-up-right" />
                    </Link>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">{p.title}</p>
                    <h3 className="box-title">
                      <Link to={`/project/${p._id}`}>{p.shortDescription}</Link>
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
