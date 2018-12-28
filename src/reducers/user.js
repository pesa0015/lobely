const initialState = [];

const user = (state = initialState, action) => {
    const user = action.payload;

    switch (action.type) {
        case 'ADD_USER':
            return user;
        default:
            return state;
    }
}

export default user;
