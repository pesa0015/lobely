import axios from 'axios'

let token = JSON.parse(window.localStorage.getItem('token'));

var http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
});

export default http;
