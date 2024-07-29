import React from "react";
import "../../styles/Input.css";
import "../../styles/Textarea.css";
import PropTypes from "prop-types";
const TextArea = ({ name, label, value, onChange }) => {
  return (
    <div className="input_container">
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
