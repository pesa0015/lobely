import { http, headers } from './httpHelper'

export function getBook(slug) {
    return http('/books/' + slug, headers());
}

export function getBooks() {
    return http('/bookshelfs', headers());
}
