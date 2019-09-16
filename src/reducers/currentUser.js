import { SIGNUP } from '@Constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP: {
      const { status, user } = action.payload;
      return status === 'completed' ? user : state;
    }
    default:
      return state;
  }
};
