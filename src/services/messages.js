import http from './httpHelper'

export function getMessages(heartId) {
    return http.get('/messages/' + heartId);
}

export function getUsersWithMessages() {
    return http('/chats/');
}

export function sendMessage(payload) {
    return http.post('/messages/', payload);
}
