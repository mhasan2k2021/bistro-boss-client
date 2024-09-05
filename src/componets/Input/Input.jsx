import React from "react";
import "./Input.css";

const Input = ({ must, label, type, name, placeholder, style, labelStyle }) => {
  return (
    <div className="input_section">
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        style={style}
        required={must || false}
      />
    </div>
  );
};

export default Input;
