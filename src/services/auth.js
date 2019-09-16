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

export default { signup, login };
