import React from "react";
import BreadcumbBg from "../assets/img/bg/team-bg-2.jpg";
import { Link } from "react-router-dom";
function Breadcumbs(props) {
  return (
    <>
      <div
        className="breadcumb-wrapper background-image"
        data-overlay="black"
        data-opacity="7"
        style={{ backgroundImage: `url(${BreadcumbBg})` }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-xxl-12 ">
              <div className="breadcumb-content ">
                <h1
                  className="breadcumb-title text-anim"
                  data-delay="100"
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "900ms",
                    animationTimingFunction: "ease",
                    animationDelay: "100ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {`${props.pageTitle}`.split(" ").map((letter, index) => (
                      <div
                        key={`about-${index}`}
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                          visibility: "inherit",
                          gap: "0.1em",
                        }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>{" "}
                </h1>
                <ul
                  className="breadcumb-menu"
                  data-delay="300"
                  data-show="true"
                  style={{
                    animationName: "slideInUp",
                    animationDuration: "900ms",
                    animationTimingFunction: "ease",
                    animationDelay: "300ms",
                    animationDirection: "normal",
                    animationFillMode: "both",
                  }}
                >
                  <li>
                    <Link to="/" className="text-decoration-none">
                      {props.prevLink}
                    </Link>
                  </li>
                  <li>{props.currentLink}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcumbs;
