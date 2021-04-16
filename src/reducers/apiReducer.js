const initial_sate = {};

export const apiReducer = (state = initial_sate, action) => {
  switch (action.type) {
    case 'PASSWORD_SUCCESS':
      return {
        loading: false,
        status: action.payload,
      };
    case 'PASSWORD_FAIL':
      return {
        loading: false,
        error: action.payload,
      };
    case 'RESET':
      return initial_sate;
    default:
      return state;
  }
};
