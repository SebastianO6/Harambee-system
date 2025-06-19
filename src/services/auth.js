import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const authService = {
  register: (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
  },

  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};