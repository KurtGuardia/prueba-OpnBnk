import React, { useEffect, useState } from 'react';
import Steps from '../components/Steps';
import { useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import Positive from '../components/Positive';

const ThirdView = () => {
  const [loading, setLoading] = useState(true);

  const api = useSelector((state) => state.api);
  const { error, status, loading: loaded } = api;

  useEffect(() => {
    loaded !== undefined ? setLoading(false) : setLoading(true);
  }, [loaded]);

  return (
    <div className='ThirdView'>
      <Steps />
      {/* {loading && <Spinner />} */}
      <Positive />
    </div>
  );
};

export default ThirdView;
