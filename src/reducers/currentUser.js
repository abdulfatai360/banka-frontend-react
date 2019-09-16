import { SIGNUP, GET_CURRENT_USER, LOGOUT } from '@Constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP: {
      const { status, user } = action.payload;
      return status === 'completed' ? user : state;
    }
    case GET_CURRENT_USER:
      return action.payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
