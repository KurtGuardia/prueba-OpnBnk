import React, { useEffect, useState } from 'react';
import Steps from '../components/Steps';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import Positive from '../components/Positive';
import Negative from '../components/Negative';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import { restart } from '../actions/apiAction';

const ThirdView = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const history = useHistory();

  const api = useSelector((state) => state.api);
  const { error, status, loading: loaded } = api;

  useEffect(() => {
    loaded !== undefined && setLoading(false);
  }, [loaded, error, status]);

  const handleRestart = () => {
    dispatch(restart());
    history.push('/');
  };

  return (
    <div className='ThirdView'>
      <Steps />
      {loading && <Spinner />}
      {status && <Positive />}
      {error && <Negative />}
      <Button text='Reiniciar' clicked={handleRestart} id='next' />
    </div>
  );
};

export default ThirdView;
