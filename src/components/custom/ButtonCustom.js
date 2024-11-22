import React from 'react';

const ButtonCustom = ({ variant = "primary", sx = {}, label, onClick }) => {
  return (
    <button
      style={{ ...sx }}
      className={`button-custom ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonCustom;
