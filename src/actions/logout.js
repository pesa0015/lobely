export function logoutSuccess() {
    window.localStorage.removeItem('token');
    return {
        type: 'DO_LOGOUT'
    }
}
