import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};


export const signupUser = async data => {
  try {
    const response = await instance.post('users/signup', data);

    if (response.data) {
      const { token, user } = response.data;
      setToken(token);
      return { user, token }; 
    } else {
      
      throw new Error('Invalid response from server');
    }
  } catch (error) {
    setToken(); 
    throw error;
  }
};

export const userLogin = async data => {
  const { data: result } = await instance.post('/users/login', data);
  console.log(result);

  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const data = await instance.post('/users/logout');
  setToken();
  return data;
};

export default instance;
