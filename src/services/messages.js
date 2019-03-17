import http from './httpHelper'

export function sendMessage(payload) {
    return http.post('/messages/', payload);
}
