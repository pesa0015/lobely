export function logoutSuccess() {
    window.localStorage.setItem('user', null);
    return {
        type: 'DO_LOGOUT'
    }
}
