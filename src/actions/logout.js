export function logoutSuccess() {
    window.localStorage.setItem('token', null);
    return {
        type: 'DO_LOGOUT'
    }
}
