const initialState = [];

const bookIds = [];

const books = (state = initialState, action) => {
    const book = action.payload;

    switch (action.type) {
        case 'FETCH_BOOKS':
            bookIds.length = 0;
            action.payload.map(book => {
                return bookIds.push(book.id);
            });
            return action.payload;
        case 'FETCH_BOOK':
            if (bookIds.indexOf(book.id) === -1) {
                state = [...state, book];
                bookIds.push(book.id);
            }
            let id = bookIds.indexOf(book.id);
            return state[id];
        case 'LIST_BOOKS':
            return state;
        case 'LIKE_BOOK':
            if (!state.length) {
                return {...state, liked: true};
            }
            return state;
        case 'DELETE_BOOK':
            if (!state.length) {
                return {...state, liked: false};
            }
            return state;
        default:
            return state;
    }
}

export default books;
