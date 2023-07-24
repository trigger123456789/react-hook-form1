

import React from "react";

const Input = ({ id, label, placeholder, type, register, errorMessage }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register(id)} /> 
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default Input;
