import React, { useEffect, useState } from 'react';
import Steps from '../components/Steps';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { sendPassword } from '../actions/apiAction';
import { Eye, Hide } from '../assets/img';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const SecondView = () => {
  const [password, setPassword] = useState('');
  const [clueCount, setClueCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isCorrectLength, setIsCorrectLength] = useState(false);
  const [hasANumber, setHasANumber] = useState(false);
  const [hasCapitalLetter, setHasCapitalLetter] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
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

    if (input !== password) {
      setPasswordsMatch(false);
      setDisabled(true);
    }
  };

  const handleSubmit = () => {
    dispatch(sendPassword(password));
    history.push('/3');
  };

  return (
    <div className='SecondView'>
      <Steps />{' '}
      <motion.div
        className='SecondView__content'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='paragraph-small quote'>
          <span className='gold'>Sab??as que:</span> 23 millones de usuarios en
          todo el mundo utilizan la contrase??a ???123456????{' '}
          <Link
            to={{
              pathname:
                'https://www.20minutos.es/noticia/3622473/0/millones-usuarios-contrasena-123456-online/?autoref=true',
            }}
            target='_blank'
            className='gold'
          >
            nota.<span style={{ fontStyle: 'normal' }}>???</span>
          </Link>
        </div>
        <p className='paragraph-medium'>
          El primer paso para tu seguridad en internet es crear una contrase??a{' '}
          <b>maestra</b> para administrar tu b??veda de informaci??n. Esta
          contrase??a maestra no es recuperable as?? que recuerdala bien. Debe
          seguir los siguientes requisitos:
        </p>
        <div className='SecondView__content--passwords'>
          <div className='main-password'>
            <p
              className={`paragraph-small quote ${
                isCorrectLength ? 'green' : 'red'
              }`}
            >
              Entre 8 y 24 caracteres {isCorrectLength ? '???' : 'X'}
            </p>
            <p
              className={`paragraph-small quote ${
                hasANumber ? 'green' : 'red'
              }`}
            >
              Al menos 1 n??mero {hasANumber ? '???' : 'X'}
            </p>
            <p
              className={`paragraph-small quote ${
                hasCapitalLetter ? 'green' : 'red'
              }`}
            >
              Al menos una may??scula {hasCapitalLetter ? '???' : 'X'}
            </p>

            <input
              id='main-password'
              required
              className={`${isValid ? 'valid' : 'error'}`}
              type={isHidePassword ? 'password' : 'text'}
              placeholder='Escribe tu contrase??a'
              onChange={handleMainPasswordInput}
            />
            {isHidePassword ? (
              <Hide
                id='hide'
                className='hide-password'
                onClick={() => setIsHidePassword(false)}
              />
            ) : (
              <Eye
                className='hide-password'
                onClick={() => setIsHidePassword(true)}
              />
            )}
          </div>

          <div className='repeat-password'>
            <p
              className={`paragraph-small quote ${
                passwordsMatch ? 'green' : 'red'
              }`}
            >
              Las contrase??as deben coincidir {passwordsMatch ? '???' : 'X'}
            </p>
            <input
              id='repeat-password'
              className={` ${passwordsMatch ? 'valid' : 'error'}`}
              required
              type={isHidePassword ? 'password' : 'text'}
              placeholder='Repite tu contrase??a'
              onChange={handleRepeatPassword}
            />
            {isHidePassword ? (
              <Hide
                id='hide'
                className='hide-password'
                onClick={() => setIsHidePassword(false)}
              />
            ) : (
              <Eye
                className='hide-password'
                onClick={() => setIsHidePassword(true)}
              />
            )}
          </div>
        </div>
        <p className='paragraph-medium'>
          Tambi??n puedes crear una pista que te ayude a recordar tu Contrase??a
          Maestra.
        </p>
        <p className='paragraph-small quote optional'>
          Crea tu pista para recordar tu contrase??a (opcional){' '}
          <span className='info'>???</span>
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
          <Button
            text='Cancelar'
            clicked={() => history.push('/')}
            id='cancel'
          />
          <Button
            text='Siguiente'
            disabled={disabled}
            clicked={handleSubmit}
            id='next'
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SecondView;
