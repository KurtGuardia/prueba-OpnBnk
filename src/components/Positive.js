import { motion } from 'framer-motion';
import React from 'react';
import { Check } from '../assets/img';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
};

const Positive = () => {
  return (
    <motion.div
      className='Final'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
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
    </motion.div>
  );
};

export default Positive;
