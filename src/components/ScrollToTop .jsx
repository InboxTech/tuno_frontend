import React, { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event to update circle progress and visibility
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const winHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / winHeight) * 100;

    setScrollPercent(percent);
    setIsVisible(scrollTop > 300);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Circle stroke calculation
  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div
      className="scroll-top"
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <svg
        className="progress-circle"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          fill="none"
          stroke="#000"
          strokeWidth="4"
          style={{
            transition: "stroke-dashoffset 0.2s linear",
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
          }}
        />

        
      </svg>
    </div>
  );
};

export default ScrollToTop;
