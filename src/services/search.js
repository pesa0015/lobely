import { http, headers } from './httpHelper'

export function searchBooks(title) {
    return http.get('/books?title=' + title, headers());
}
