import api from './apiConfig';

export const signin = async userData => {
  try {
    const response = await api.post(`/signin`, userData);
    await localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async userData => {
  try {
    const response = await api.post(`/signup`, userData);

    await localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// verifyuser happens with the jwt
// so no login info required
export const verifyuser = async () => {
  try {
    const response = await api.get(`/verifyUser`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async id => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (id, bodyData) => {
  try {
    const response = await api.put(`/users/${id}`, bodyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
