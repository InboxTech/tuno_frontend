import React,{useState,useEffect,useRef} from "react";
import {Link} from 'react-router-dom';
import team_1_2 from "../assets/img/team/team_1_2.png";
import team_1_4 from "../assets/img/team/team_1_4.png";
import team_1_6 from "../assets/img/team/team_1_6.png";
import team_1_7 from "../assets/img/team/team_1_7.png";
import team_1_3 from "../assets/img/team/team_1_3.png";
import team_1_1 from "../assets/img/team/team_1_1.png";
import team_1_5 from "../assets/img/team/team_1_5.png";
import team_1_8 from "../assets/img/team/team_1_8.png";
import teamBackground from "../assets/img/bg/team-bg-3.jpg";
import teamCard2_shape from "../assets/img/shape/team-card2-shape.png";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const teamMembers = [
  {
    name: "Alex Javed",
    image: team_1_2,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
  {
    name: "Jessica Lauren",
    image: team_1_4,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
  {
    name: "Jenny William",
    image: team_1_6,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
  {
    name: "Daniel Thomas",
    image: team_1_7,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
  {
    name: "Alex Joseph",
    image: team_1_3,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
  {
    name: "Michael Clark",
    image: team_1_1,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
  {
    name: "John Greyman",
    image: team_1_5,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
  {
    name: "Ross Bailey",
    image: team_1_8,
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      whatsapp: "https://whatsapp.com/",
    },
  },
];

const Teams = () => {
  const title ="Expert Team"
          const delay = 50;
      
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
    <section
      className="space overflow-hidden team-area-2 team-bg-gradient-overlay"
      data-bg-src="assets/img/bg/team-bg-2.jpg"
      style={{
        backgroundImage: `url(${teamBackground})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title2 text-gradient text-uppercase mb-30">
                AI Expert Team
              </span>
              <h2 ref={titleRef } className="sec-title text-white fw-bold text-uppercase text-anim2">
                
                 {title.split('').map((letter, index) => (
                                            <span
                                                key={index}
                                                className={`animated-letter ${titleVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * delay}ms` }}
                                                >
                                                {letter === ' ' ? '\u00A0' : letter}
                                                </span>
                                        ))}
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="th-team team-card style2" data-aos="fade-up" data-aos-duration="2000">
                <div
                  className="team-img"
                  data-mask-src="assets/img/shape/team-card2-shape.png"
                  style={{
                    WebkitMaskImage: `url(${teamCard2_shape})`,
                    maskImage: `url(${teamCard2_shape})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                    maskSize: "cover",
                  }}
                >
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <Link to="/team-details">{member.name}</Link>
                  </h3>
                </div>
                <div className="th-social">
                  <Link target="_blank" to={member.links.facebook}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link target="_blank" to={member.links.twitter}>
                   <FontAwesomeIcon icon={faTwitter}  />
                  </Link>
                  <Link target="_blank" to={member.links.instagram}>
                   <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link target="_blank" to={member.links.whatsapp}>
                    <FontAwesomeIcon icon={faWhatsapp}  />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
