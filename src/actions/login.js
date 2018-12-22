export function loginSuccess(token) {
    window.localStorage.setItem('token', token);
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token: token
        }
    }
}
