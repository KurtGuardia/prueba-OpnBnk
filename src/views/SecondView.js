import React, { useEffect, useState } from 'react';
import Steps from '../components/Steps';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { submitForm } from '../services/api';
import { sendPassword } from '../actions/apiAction';

const SecondView = () => {
  const [password, setPassword] = useState('');
  const [clueCount, setClueCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isCorrectLength, setIsCorrectLength] = useState(false);
  const [hasANumber, setHasANumber] = useState(false);
  const [hasCapitalLetter, setHasCapitalLetter] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCorrectLength && hasANumber && hasCapitalLetter) setIsValid(true);
    if (!isCorrectLength || !hasANumber || !hasCapitalLetter) setIsValid(false);
  }, [isCorrectLength, hasANumber, hasCapitalLetter]);

  const handleMainPasswordInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    const numberPattern = /\d/;
    const capitalPattern = /(?=.*[A-Z])/;

    setPassword(input);

    if (input.length > 7) setIsCorrectLength(true);
    if (input.length > 24) setIsCorrectLength(false);
    if (input.length < 7) setIsCorrectLength(false);

    if (numberPattern.test(input)) setHasANumber(true);
    if (!numberPattern.test(input)) setHasANumber(false);

    if (capitalPattern.test(input)) setHasCapitalLetter(true);
    if (!capitalPattern.test(input)) setHasCapitalLetter(false);
  };

  const handleRepeatPassword = (e) => {
    e.preventDefault();
    const input = e.target.value;

    if (input === password) {
      setPasswordsMatch(true);
      setDisabled(false);
    }
  };

  const handleSubmit = () => {
    dispatch(sendPassword(password));
    history.push('/3');
  };

  return (
    <div className='SecondView'>
      <Steps />{' '}
      <div className='SecondView__content'>
        <div className='paragraph-small quote'>
          <span className='gold'>Sabías que:</span> 23 millones de usuarios en
          todo el mundo utilizan la contraseña “123456”?{' '}
          <Link
            to={{
              pathname:
                'https://www.20minutos.es/noticia/3622473/0/millones-usuarios-contrasena-123456-online/?autoref=true',
            }}
            target='_blank'
            className='gold'
          >
            nota.<span style={{ fontStyle: 'normal' }}>↗</span>
          </Link>
        </div>
        <p className='paragraph-medium'>
          El primer paso para tu seguridad en internet es crear una contraseña{' '}
          <b>maestra</b> para administrar tu bóveda de información. Esta
          contraseña maestra no es recuperable así que recuerdala bien. Debe
          seguir los siguientes requisitos:
        </p>
        <div className='SecondView__content--passwords'>
          <div className='main-password'>
            <p
              className={`paragraph-small quote ${
                isCorrectLength ? 'green' : 'red'
              }`}
            >
              Entre 8 y 24 caracteres {isCorrectLength ? '✔' : 'X'}
            </p>
            <p
              className={`paragraph-small quote ${
                hasANumber ? 'green' : 'red'
              }`}
            >
              Al menos 1 número {hasANumber ? '✔' : 'X'}
            </p>
            <p
              className={`paragraph-small quote ${
                hasCapitalLetter ? 'green' : 'red'
              }`}
            >
              Al menos una mayúscula {hasCapitalLetter ? '✔' : 'X'}
            </p>

            <input
              required
              className={` ${isValid ? 'valid' : 'error'}`}
              type='password'
              placeholder='Escribe tu contraseña'
              onChange={handleMainPasswordInput}
            />
          </div>
          <div className='repeat-password'>
            <p
              className={`paragraph-small quote ${
                passwordsMatch ? 'green' : 'red'
              }`}
            >
              Las contraseñas deben coincidir {passwordsMatch ? '✔' : 'X'}
            </p>
            <input
              className={` ${passwordsMatch ? 'valid' : 'error'}`}
              required
              type='password'
              placeholder='Repite tu contraseña'
              onChange={handleRepeatPassword}
            />
          </div>
        </div>
        <p className='paragraph-medium'>
          También puedes crear una pista que te ayude a recordar tu Contraseña
          Maestra.
        </p>
        <p className='paragraph-small quote optional'>
          Crea tu pista para recordar tu contraseña (opcional){' '}
          <span className='info'>ⓘ</span>
        </p>
        <input
          className='clue'
          maxLength='255'
          type='text'
          placeholder='Introduce tu pista'
          autoComplete='off'
          onChange={(e) => setClueCount(e.target.value.length)}
        />
        {clueCount}/255
        <div className='SecondView__content--bottom'>
          <Button text='Cancelar' clicked={() => history.push('/')} />
          <Button text='Siguiente' disabled={disabled} clicked={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SecondView;
