const initialState = {
    token: null,
    isAuthenticated: false,
    error: '',
    isLoading: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SENT':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                token: action.payload.token,
                id: action.payload.id,
                isAuthenticated: true,
                isLoading: false
            });
        case 'INVALID_LOGIN':
            return {
                ...state,
                error: 'Fel användarnamn eller lösenord.',
                isLoading: false
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                error: 'Något gick fel, var god försök igen om en stund.',
                isLoading: false
            }
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
