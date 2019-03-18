import http from './httpHelper'

export function getMessages(payload) {
    return http('/messages/', payload);
}

export function getUsersWithMessages() {
    return http('/chats/');
}

export function sendMessage(payload) {
    return http.post('/messages/', payload);
}
