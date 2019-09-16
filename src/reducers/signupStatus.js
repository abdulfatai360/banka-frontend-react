import { SIGNUP } from '@Constants/actionTypes';

export default (state = '', action) => {
  switch (action.type) {
    case SIGNUP: {
      const { status } = action.payload;
      return status === 'failed' ? action.payload : status;
    }
    default:
      return state;
  }
};
