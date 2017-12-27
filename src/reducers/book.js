const initialState = {
    books: []
}

const books = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS':
            return action.payload;
        case 'FETCH_BOOK':
            const updatedItem = state.map(item => {
                if (item.slug === action.payload.slug) {
                  return { ...item, ...action.payload };
                }
                return { ...action.payload };
              });
            return updatedItem;
        case 'LIST_BOOKS':
            return state;
        default:
            return state;
    }
}

export default books;
