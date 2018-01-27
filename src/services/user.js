import { http, headers } from './httpHelper'

export function sendHeart(userId, bookId) {
    return http.post('/hearts/', 'userId=' + userId + '&bookId=' + bookId, headers());
}

export function deleteHeart(userId) {
    return http.delete('/hearts/' + userId, headers());
}
