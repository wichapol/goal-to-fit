import React from "react";
import "./Input.css";

const Input = ({ children = "", htmlFor = "", label = "", ...props }) => {
  return (
    <span className="module-input">
      <label
        hidden={label === "" ? true : false}
        className="secondary-text-color middle-font"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input {...props} required />
      <p
        className="primary-text-color p-input"        
      >
        {children}
      </p>
    </span>
  );
};

export default Input;
