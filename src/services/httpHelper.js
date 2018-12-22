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
  error => Promise.reject(error)
);

export default http;
