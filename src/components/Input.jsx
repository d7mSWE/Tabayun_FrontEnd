import React from 'react';

const Input = ({ label, className = '', ...props }) => {
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <input className={`input-field ${className}`} {...props} />
    </div>
  );
};

export default Input;
