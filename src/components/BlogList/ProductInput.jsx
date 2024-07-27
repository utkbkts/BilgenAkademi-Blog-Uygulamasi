import PropTypes from "prop-types";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

function ProductInput({
  handleChange,
  label,
  placeholder,
  name,
  type,
  value,
  error,
}) {
  return (
    <div className="input_container">
      {name === "description" ? (
        <TextArea
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          value={value}
          label={label}
        />
      ) : (
        <Input
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          value={value}
          label={label}
        />
      )}
      {error && <span className="error_message">{error}</span>}
    </div>
  );
}

ProductInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.string,
};

export default ProductInput;
