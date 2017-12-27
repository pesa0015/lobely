export function loginSuccess(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token: user.token,
            firstname: user.firstname
        }
    }
}
