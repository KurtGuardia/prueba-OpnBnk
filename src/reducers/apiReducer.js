export const apiReducer = (state = {}, action) => {
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
    default:
      return state;
  }
};
