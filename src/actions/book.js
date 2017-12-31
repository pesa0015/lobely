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

export function haveLikedBook(id) {
    return {
        type: 'LIKE_BOOK',
        payload: id
    }
}

export function haveDeletedBook(id) {
    return {
        type: 'DELETE_BOOK',
        payload: id
    }
}

export function updateComment(comment) {
    return {
        type: 'UPDATE_COMMENT',
        payload: comment
    }
}
