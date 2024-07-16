import React from "react";
import PropTypes from "prop-types";
import "../../styles/Input.css";

const Input = ({ type, name, addClass, label, value, onChange }) => {
  const inputClassName = `input ${addClass ? addClass : ""}`;
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName}
        placeholder=" "
      />
      <label htmlFor={name}>{label}</label>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
