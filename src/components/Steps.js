import React from 'react';
import { useLocation } from 'react-router-dom';

const Steps = () => {
  const location = useLocation().pathname;

  return (
    <div className='Steps'>
      <div className='Steps__numbers'>
        <div
          className={`Steps__numbers--each 1 ${
            location === '/' ? 'active' : ''
          }`}
        >
          <div className='circle'></div>
          <div className='numb'>1</div>
        </div>
        <div
          className={`Steps__numbers--each ${
            location === '/2' ? 'active' : ''
          }`}
        >
          <div className='circle'></div>
          <div className='numb'>2</div>
        </div>
        <div
          className={`Steps__numbers--each 3 ${
            location === '/3' ? 'active' : ''
          }`}
        >
          <div className='circle'></div>
          <div className='numb'>3</div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
