import React from 'react';

const Button = ({ text, disabled, clicked }) => {
  return (
    <button disabled={disabled} className='btn' onClick={clicked}>
      {text}
    </button>
  );
};

export default Button;
