import React, { useState } from 'react';
import Steps from '../components/Steps';
import { Mind, Safe } from '../assets/img';
import Button from '../components/Button';

const FirstView = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className='FirstView'>
      <Steps />
      <div className='FirstView__content'>
        <div className='paragraph-small quote'>
          <span className='gold'>Sabías que:</span> 59% de los españoles
          utilizan la misma contraseña para proteger <b>todas</b> sus cuentas en
          internet? <span className='gold'>nota.</span>
        </div>
        <div className='FirstView__content--images'>
          <figure>
            <Mind />
            <figcaption className='paragraph-small'>
              Guarda aquí todas tus contraseñas, datos o cualquier información
              importante, olvida las notas de papel y peor! usar las mismas
              contraseñas en todos los sitios
            </figcaption>
          </figure>
          <figure>
            <Safe />
            <figcaption className='paragraph-small'>
              Crea tu clave maestra: solo tú podrás acceder a tus cuentas con
              ella
            </figcaption>
          </figure>
        </div>
        <p className='paragraph-big'>Cómo funciona</p>
        <p className='paragraph-medium'>
          En primer lugar, debes crear una contraseña maestra para administrar
          tu bóveda de información. Por seguridad nadie tiene acceso a ella, así
          que no podrás recuperar esta contraseña, recuérdala bien.
        </p>
        <p className='paragraph-big'>Qué datos puedes guardar</p>
        <p className='paragraph-medium'>
          Información importante, por ejemplo: el número de la tarjeta bancaria,
          el PIN, el PUK del teléfono móvil, el número de serie de algún
          dispositivo, contraseñas de diversos sitios o cualquier información
          que necesites tener en un lugar seguro.
        </p>
        <div className='FirstView__content--bottom'>
          <div class='age-terms-validation'>
            <input
              type='checkbox'
              id='privacy'
              value='privacy'
              class='checkbox'
              onChange={() => setIsChecked(!isChecked)}
            />
            <span class='checkmark'></span>
            <label for='privacy' class='paragraph-small quote'>
              Soy mayor de 18 años y acepto que mis datos sean tratados según la
              politica de protección de datos.
            </label>
          </div>
          <Button text='Siguiente' disabled={!isChecked} />
        </div>
      </div>
    </div>
  );
};

export default FirstView;
