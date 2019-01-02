const initialState = [];

const user = (state = initialState, action) => {
    const user = action.payload;

    switch (action.type) {
        case 'ADD_USER':
            return user;
        case 'SEND_USER_HEART':
            return {
                ...state,
                heart: true
            }
        default:
            return state;
    }
}

export default user;
