import React from "react";
import "../../styles/Button.css";
const Button = ({ color, size, addClass, children, onClick, type }) => {
  const btnClassNames = `btn btn-${color} btn-${size} ${
    addClass ? addClass : ""
  }`;

  return (
    <button className={btnClassNames} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
