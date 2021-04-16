import React from 'react';
import { X } from '../assets/img';

const Positive = () => {
  return (
    <div className='Final'>
      <div className='Final__title'>
        <X />
        <h2 className='title-huge'>Ha ocurrido un error</h2>
      </div>
      <div className='Final__text'>
        <p className='paragraph-big'>
          {' '}
          No hemos podido crear tu Contraseña Maestra. Inténtalo nuevamente más
          tarde. Disculpa las molestias
        </p>
      </div>
    </div>
  );
};

export default Positive;
