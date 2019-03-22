const initialState = {
    data: []
}

const message = (state = initialState, action) => {
    const message = action.payload;

    switch (action.type) {
        case 'DO_LOGOUT':
            return {
                data: []
            }
        case 'FETCH_USERS_WITH_MESSAGES':
            return {
                ...state,
                data: message
            }
        default:
            return state;
    }
}

export default message;
