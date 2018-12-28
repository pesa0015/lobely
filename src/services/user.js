import http from './httpHelper'

export function sendHeart(userId, bookId) {
    return http.post('/hearts/', JSON.stringify({userId: userId, bookId: bookId}));
}

export function deleteHeart(userId) {
    return http.delete('/hearts/' + userId);
}

export function getUserBySlug(slug, book) {
    return http.get('/user/' + slug + '?book=' + book);
}
