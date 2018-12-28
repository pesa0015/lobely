import http from './httpHelper'

export default function refreshToken() {
    http('/refresh-token').then((response) => {
        if (response.status === 200) {
            let token = response.headers.authorization.replace('Bearer ', '');
            window.localStorage.setItem('token', token);
        }
    });
}
