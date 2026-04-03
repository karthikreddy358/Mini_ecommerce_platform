import React from 'react';
import './Input.css';

const Input = ({ icon: Icon, className = '', ...props }) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {Icon && <Icon className="input-icon" size={18} />}
      <input className={`input-field ${Icon ? 'has-icon' : ''}`} {...props} />
    </div>
  );
};

export default Input;
