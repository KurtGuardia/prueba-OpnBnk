import React from 'react';
import { Logo } from '../assets/img';

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <h1 className='title-huge'>Crea tu Password Manager</h1>
    </div>
  );
};

export default Header;
