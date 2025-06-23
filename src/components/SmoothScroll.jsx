// src/components/SmoothScroll.jsx
import React, { useEffect, useRef } from "react";
import useWindowSize from "./hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef();

  const data = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }).current;

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }
  };

  useEffect(() => {
    requestAnimationFrame(smoothScrollingHandler);
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 50) / 50;

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.rounded}px)`;
    }

    requestAnimationFrame(smoothScrollingHandler);
  };

  return (
    <div className="smooth-scroll-parent">
      <div ref={scrollingContainerRef} className="smooth-scroll-container">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
