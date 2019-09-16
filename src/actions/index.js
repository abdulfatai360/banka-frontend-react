import {
  SET_CURRENT_PAGE,
  SIGNUP,
  GET_CURRENT_USER,
  LOGOUT,
} from '@Constants/actionTypes';
import authService from '@Services/auth';

export const setCurrentPage = (pageTitle) => ({
  type: SET_CURRENT_PAGE,
  payload: pageTitle,
});

export const signup = (user) => {
  const action = (payload) => ({ type: SIGNUP, payload });

  const signupThunk = async (dispatch) => {
    try {
      const { data } = await authService.signup(user);
      localStorage.setItem('user', JSON.stringify(data.data[0]));
      dispatch(action({ status: 'completed', user: data.data[0] }));
    } catch (err) {
      const {
        response: {
          data: { error },
        },
      } = err;

      dispatch(action({ status: 'failed', error }));
    }
  };

  return signupThunk;
};

export const getCurrentUser = () => ({
  type: GET_CURRENT_USER,
  payload: authService.getCurrentUser(),
});

export const logout = () => {
  localStorage.removeItem('user');
  return { type: LOGOUT };
};
