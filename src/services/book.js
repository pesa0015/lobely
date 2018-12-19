import http from './httpHelper'

export function getBook(slug) {
    return http('/books/' + slug);
}

export function getUsersByBook(slug) {
    return http('/books/' + slug + '?showUsers=1');
}

export function getBooks() {
    return http('/bookshelfs');
}

export function likeBook(id) {
    return http.post('/bookshelfs', JSON.stringify({bookId: id}));
}

export function deleteBook(id) {
    return http.delete('/bookshelfs/' + id);
}

export function updateBookComment(id, comment) {
    return http.put('/bookshelfs/' + id, JSON.stringify({comment: comment}));
}
