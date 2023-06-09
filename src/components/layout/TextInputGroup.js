import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function TextInputGroup({ label, name, value, placeholder, type, onChange ,error}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className={classnames("form-control form-control-lg",{
          'is-valid':error
        })}
        placeholder={placeholder}
        onChange={onChange}
      />
     {error &&  <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

TextInputGroup.propType={
  name:PropTypes.string.isRequired,
  placeholder:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  onChange:PropTypes.string.isRequired,
  error:PropTypes.string
}
TextInputGroup.defaultProps={
  type:'text'
}
export default TextInputGroup;
