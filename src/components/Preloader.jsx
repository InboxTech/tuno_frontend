import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo2.svg"; // adjust the path if needed



const Preloader = () => {
  const [visible, setVisible] = useState(true);

  // Optional: auto-hide after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // auto-hide in 3s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader">
      <button className="th-btn preloaderCls" onClick={() => setVisible(false)}>
        Cancel Preloader
      </button>
      <div className="preloader-inner">
        <div className="bounce">
          <img src={logo} alt="Loading Logo" />
        </div>
        <span className="loader">
          Tuno <span className="loading-text">Tuno</span>
        </span>
      </div>
    </div>
  );
};

export default Preloader;
