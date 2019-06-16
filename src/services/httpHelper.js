import axios from 'axios'

var http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
});

http.interceptors.request.use(
  config => {
    if (config.baseURL === process.env.REACT_APP_API_URL && !config.headers.Authorization) {
      const token = window.localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use((response) => {
    return response;
}, error => {
    if (error.response.status === 401 && error.config.post !== 'POST' && error.config.url.indexOf('auth') === -1) {
        window.localStorage.removeItem('token');
        window.location.href = '/';

        return;
    }
    return Promise.reject(error);
});

export default http;
