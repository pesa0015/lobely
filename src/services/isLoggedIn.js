export default function isLoggedIn() {
    let user = JSON.parse(window.localStorage.getItem('token'));
    return user != null;
}
