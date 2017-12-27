export function fetchBooks(books) {
    return {
        type: 'FETCH_BOOKS',
        payload: books
    }
}

export function listBooks() {
    return {
        type: 'LIST_BOOKS'
    }
}

export function fetchBook(book) {
    return {
        type: 'FETCH_BOOK',
        payload: book
    }
}
