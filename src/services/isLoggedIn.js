export default function isLoggedIn() {
    let token = window.localStorage.getItem('token');
    return token != null;
}
