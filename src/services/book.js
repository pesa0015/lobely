import { http, headers } from './httpHelper'

export function getBook(slug) {
    return http('/books/' + slug, headers());
}

export function getBooks() {
    return http('/bookshelfs', headers());
}

export function likeBook(id) {
    return http.post('/bookshelfs', 'bookId=' + id, headers());
}

export function deleteBook(id) {
    return http.delete('/bookshelfs/' + id, headers());
}

export function updateBookComment(id, comment) {
    return http.put('/bookshelfs/' + id, 'comment=' + comment, headers());
}
