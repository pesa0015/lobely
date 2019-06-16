export function loginSent() {
    return {
        type: 'LOGIN_SENT'
    }
}

export function loginSuccess(token) {
    window.localStorage.setItem('token', token);
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token: token
        }
    }
}

export function invalidLogin() {
    return {
        type: 'INVALID_LOGIN'
    }
}

export function loginError() {
    return {
        type: 'LOGIN_ERROR'
    }
}
