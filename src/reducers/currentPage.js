import { SET_CURRENT_PAGE } from '@Constants/actionTypes';

export default (state = 'home', action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};
