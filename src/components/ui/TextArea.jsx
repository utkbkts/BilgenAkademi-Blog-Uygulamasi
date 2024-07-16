import React from "react";
import PropTypes from "prop-types";
import "../../styles/Textarea.css";

const TextArea = ({ name, label, value, onChange }) => {
  return (
    <div className="input-container">
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        className="input"
        placeholder=" "
      ></textarea>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
