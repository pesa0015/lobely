const initialState = {
    token: null,
    isAuthenticated: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                token: action.payload.token,
                id: action.payload.id,
                isAuthenticated: true
            });
        case 'DO_LOGOUT':
            return Object.assign({}, state, {
                token: null,
                isAuthenticated: false
            });
        default:
            return state;
    }
}

export default auth;
