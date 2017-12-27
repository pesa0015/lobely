import { http } from './httpHelper'

export default function login(username, password) {
    let payload = 'email=' + username + '&password=' + password;
    return http.post('/auth', payload);
}
