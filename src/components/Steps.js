import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Steps = () => {
  const location = useLocation().pathname;
  const storedLoc = useRef(location);
  const [activeStep, setActiveStep] = useState('/');

  //For the step's animation
  useEffect(() => {
    setTimeout(() => {
      setActiveStep(storedLoc.current);
    }, 50);
  }, []);

  return (
    <div className='Steps'>
      <div className='Steps__numbers'>
        <div
          className={`Steps__numbers--each 1 ${
            activeStep === '/' ? 'active' : ''
          }`}
        >
          <div className='circle'></div>
          <div className='numb'>1</div>
        </div>
        <div
          className={`Steps__numbers--each ${
            activeStep === '/2' ? 'active' : ''
          }`}
        >
          <div className='circle'></div>
          <div className='numb'>2</div>
        </div>
        <div
          className={`Steps__numbers--each 3 ${
            activeStep === '/3' ? 'active' : ''
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
