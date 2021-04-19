import React from 'react';
import { X } from '../assets/img';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
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
      const
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
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
    </motion.div>
  );
};

export default Positive;
