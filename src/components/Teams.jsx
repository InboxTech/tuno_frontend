import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import teamCard2_shape from "../assets/img/shape/team-card2-shape.png";
import teamBackground from "../assets/img/bg/team-bg-3.jpg";
import axios from "axios";
import { useAuth } from "../store/auth";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const { API } = useAuth();
  const title = "Expert Team";
  const delay = 50;
  const titleRef = useRef(null);
  const [titleVisible, setPTitleVisible] = useState(false);

  // Fetch members from backend
  const fetchTeamMembers = async () => {
    try {
      const res = await axios.get(`${API}/api/teamMeber/frontend/team`);
      setTeamMembers(res.data.Teams);
    } catch (error) {
      console.error("Failed to fetch team members:", error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  useEffect(() => {
    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPTitleVisible(true);
          observerTitle.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observerTitle.observe(titleRef.current);

    return () => observerTitle.disconnect();
  }, []);

  return (
    <section
      className="space overflow-hidden team-area-2 team-bg-gradient-overlay"
      style={{
        backgroundImage: `url(${teamBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAize: "cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title2 text-gradient text-uppercase mb-30">
                AI Expert Team
              </span>
              <h2
                ref={titleRef}
                className="sec-title text-white fw-bold text-uppercase text-anim2"
              >
                {title.split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`animated-letter ${
                      titleVisible ? "visible" : ""
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

        <div className="row gy-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={member._id || index}
            >
              <div
                className="th-team team-card style2"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div
                  className="team-img"
                  style={{
                    WebkitMaskImage: `url(${teamCard2_shape})`,
                    maskImage: `url(${teamCard2_shape})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                    maskSize: "cover",
                  }}
                >
                  <img src={`${API}${member.image}`} alt={member.title} />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    
                      {member.title}
                    
                  </h3>
                </div>
                <div className="th-social">
                  <a
                    href={member.facebook || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href={member.twitter || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href={member.instagram || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href={member.linkedIn || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/team-details" className="th-btn style-gradient">
             Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Teams;
