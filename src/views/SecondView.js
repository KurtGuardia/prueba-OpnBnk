import React from 'react';
import Steps from '../components/Steps';
import Button from '../components/Button';
const SecondView = () => {
  return (
    <div className='SecondView'>
      <Steps />{' '}
      <div className='SecondView__content'>
        <div className='paragraph-small quote'>
          <span className='gold'>Sabías que:</span> 23 millones de usuarios en
          todo el mundo utilizan la contraseña “123456”?{' '}
          <span className='gold'>nota.</span>
        </div>
        <p className='paragraph-medium'>
          El primer paso para tu seguridad en internet es crear una contraseña{' '}
          <b>maestra</b> para administrar tu bóveda de información. Esta
          contraseña maestra no es recuperable así que recuerdala bien. Debe
          seguir los siguientes requisitos:
        </p>
        <div className='SecondView__content--passwords'>
          <div className='main-password'>
            <p className='paragraph-small quote red'>
              Entre 8 y 24 caracteres {`X`}
            </p>
            <p className='paragraph-small quote red'>Al menos 1 número {`X`}</p>
            <p className='paragraph-small quote red'>
              Al menos una mayúscula {`X`}
            </p>

            <input
              required
              className='error'
              type='password'
              placeholder='Escribe tu contraseña'
            />
          </div>
          <div className='repeat-password'>
            <p className='paragraph-small quote red'>
              Las contraseñas deben coincidir {`X`}
            </p>

            <input
              required
              type='password'
              placeholder='Repite tu contraseña'
            />
          </div>
        </div>
        <p className='paragraph-medium'>
          También puedes crear una puesta que te ayude a recordar tu Contraseña
          Maestra.
        </p>
        <p className='paragraph-small quote optional'>
          Crea tu pista para recordar tu contraseña (opcional)
        </p>
        <input
          className='clue'
          type='text'
          placeholder='Introduce tu pista'
          autoComplete='off'
        />
        <div className='SecondView__content--bottom'>
          <Button text='Cancelar' />
          <Button text='Siguiente' disabled />
        </div>
      </div>
    </div>
  );
};

export default SecondView;
