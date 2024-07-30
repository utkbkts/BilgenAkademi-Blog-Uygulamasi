import React, { useState, useEffect } from "react";
import "../../styles/scrollButton.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      // Show button when scrolled down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed-button ${isVisible ? "visible" : ""}`}>
      <button className="button-up" onClick={scrollToTop}>
        <FaArrowUp size={20} color="white" />
      </button>
    </div>
  );
};

export default ScrollButton;
