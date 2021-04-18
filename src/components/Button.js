import React from 'react';

const Button = ({ text, disabled, clicked, id }) => {
  return (
    <button id={id} disabled={disabled} className='btn' onClick={clicked}>
      {text}
    </button>
  );
};

export default Button;
