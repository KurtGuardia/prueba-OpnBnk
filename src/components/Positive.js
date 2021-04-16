import React from 'react';
import { Check } from '../assets/img';

const Positive = () => {
  return (
    <div className='Final'>
      <div className='Final__title'>
        <Check />
        <h2 className='title-huge'>Tu Password Manager ya está creado!</h2>
      </div>
      <div className='Final__text'>
        <p className='paragraph-big'>
          {' '}
          Estás un paso más lejos de los cyberataques! Ahora puedes crear
          diferentes contraseñas para cada Red Social, blog o sitio web y tu
          <b> Password Manager </b>las recordará por ti!
        </p>
      </div>
    </div>
  );
};

export default Positive;
