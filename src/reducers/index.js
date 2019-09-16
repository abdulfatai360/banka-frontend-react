import { combineReducers } from 'redux';
import currentPage from './currentPage';
import currentUser from './currentUser';
import signupStatus from './signupStatus';

export default combineReducers({
  currentPage,
  currentUser,
  signupStatus,
});
