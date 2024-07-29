import React from "react";
import "../../styles/Input.css";
import PropTypes from "prop-types";

const Input = ({ type, name, addClass, label, value, onChange }) => {
  const inputClassName = `input ${addClass ? addClass : ""}`;
  return (
    <div className="input_container">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName}
        placeholder=" "
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
};

export default Input;
