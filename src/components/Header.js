import React from 'react';
import { Logo } from '../assets/img';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Logo />
      </div>
      <h1 className='title-huge'>Crea tu Password Manager</h1>
      <div id='google_translate_element'></div>/
    </div>
  );
};

export default Header;
