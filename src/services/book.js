import { http, headers } from './httpHelper'

export function getBook(slug) {
    return http('/books/' + slug, headers());
}

export function getUsersByBook(slug) {
    return http('/books/' + slug + '?showUsers=1', headers());
}

export function getBooks() {
    return http('/bookshelfs', headers());
}

export function likeBook(id) {
    return http.post('/bookshelfs', JSON.stringify({bookId: id}), headers());
}

export function deleteBook(id) {
    return http.delete('/bookshelfs/' + id, headers());
}

export function updateBookComment(id, comment) {
    return http.put('/bookshelfs/' + id, JSON.stringify({comment: comment}), headers());
}
