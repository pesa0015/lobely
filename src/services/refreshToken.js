import { http, headers } from './httpHelper'

export default function refreshToken() {
    http('/refresh-token', headers()).then((response) => {
        if (response.status === 200) {
            let token = response.headers.authorization.replace('Bearer ', '');
            window.localStorage.getItem('token').token = token;
        }
    });
}
