import React, { useState } from 'react';
import Steps from '../components/Steps';
import { Mind, Safe } from '../assets/img';
import Button from '../components/Button';
import { Link, useHistory } from 'react-router-dom';

const FirstView = () => {
  const [isChecked, setIsChecked] = useState(false);
  const history = useHistory();

  const nextPage = () => {
    history.push('/2');
  };

  return (
    <div className='FirstView'>
      <Steps />
      <div className='FirstView__content'>
        <div className='paragraph-small quote'>
          <span className='gold'>Sabías que:</span> 59% de los españoles
          utilizan la misma contraseña para proteger <b>todas</b> sus cuentas en
          internet?
          <Link
            to={{
              pathname:
                'https://www.20minutos.es/noticia/3725339/0/59-por-ciento-espanoles-utilizan-misma-contrasena-proteger-cuentas-internet/?autoref=true',
            }}
            target='_blank'
            className='gold'
          >
            {' '}
            nota.<span style={{ fontStyle: 'normal' }}>↗</span>
          </Link>
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
          <div className='age-terms-validation'>
            <input
              id='privacy'
              type='checkbox'
              value='privacy'
              className='checkbox'
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className='checkmark'></span>
            <label
              htmlFor='privacy'
              id='privacy'
              className='paragraph-small quote'
            >
              Soy mayor de 18 años y acepto que mis datos sean tratados según la
              politica de protección de datos.
            </label>
          </div>
          <Button
            text='Siguiente'
            disabled={!isChecked}
            clicked={nextPage}
            id='next'
          />
        </div>
      </div>
    </div>
  );
};

export default FirstView;
