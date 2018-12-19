import http from './httpHelper'

export function sendHeart(userId, bookId) {
    return http.post('/hearts/', JSON.stringify({userId: userId, bookId: bookId}));
}

export function deleteHeart(userId) {
    return http.delete('/hearts/' + userId);
}
