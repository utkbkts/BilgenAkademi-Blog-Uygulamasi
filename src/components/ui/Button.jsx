import React from "react";
import PropTypes from "prop-types";
import "../../styles/Button.css";

const Button = ({ type, color, size, addClass, children, onClick }) => {
  const btnClassNames = `btn btn-${color} btn-${size} ${
    addClass ? addClass : ""
  }`;

  return (
    <button type={type} className={btnClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"])
    .isRequired, // sadece belirtilenler kullanılacak ve zorunlu
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired, // zorunlu alan
  addClass: PropTypes.string,
  children: PropTypes.node.isRequired, // children react.node type olur.
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
