import { submitForm } from '../services/api';

export const sendPassword = (password) => (dispatch, getState) => {
  submitForm(password)
    .then((result) =>
      dispatch({
        type: 'PASSWORD_SUCCESS',
        payload: result,
      })
    )
    .catch((error) =>
      dispatch({
        type: 'PASSWORD_FAIL',
        payload: error,
      })
    );
};

export const restart = () => (dispatch, getState) => {
  dispatch({ type: 'RESET' });
};
