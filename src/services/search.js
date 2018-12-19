import http from './httpHelper'

export function searchBooks(title) {
    return http.get('/books?title=' + title);
}
