import React from "react";
import "./Input.css";

const Input = ({ label, type, name, placeholder, style }) => {
  return (
    <div className="input_section">
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} style={style} />
    </div>
  );
};

export default Input;