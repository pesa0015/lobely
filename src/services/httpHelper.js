import axios from 'axios'

var http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
});

const headers = () => {
    let token = JSON.parse(window.localStorage.getItem('user')).token;
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer ' + token
        }
    };
}

export { http, headers };
