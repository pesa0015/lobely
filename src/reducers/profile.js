const initialState = {};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PROFILE':
            return action.payload;
        case 'GET_PROFILE':
            return state;
        case 'UPDATE_BIO':
            return {
                ...state,
                bio: action.payload
            }
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    }
}

export default profile;
