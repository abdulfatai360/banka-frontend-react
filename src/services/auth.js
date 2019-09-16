import httpService from '@Services/http';
import { API_DEVELOPMENT_URL } from '@Constants/apiUrl';

const signup = (user) => {
  const url = `${API_DEVELOPMENT_URL}/auth/signup`;
  return httpService.post(url, user);
};

const login = (credentials) => {
  const url = `${API_DEVELOPMENT_URL}/auth/login`;
  return httpService.post(url, credentials);
};

const getCurrentUser = () => {
  let user = localStorage.getItem('user');
  user = JSON.parse(user);

  const isUserNull = !user || Object.keys(user).length === 0;
  if (isUserNull) return {};

  delete user.token;
  return user;
};

export default { signup, login, getCurrentUser };
