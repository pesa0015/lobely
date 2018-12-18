export function loginSuccess(user) {
    window.localStorage.setItem('token', JSON.stringify(user.token));
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token: user.token,
            firstname: user.firstname
        }
    }
}
