export default function isLoggedIn() {
    let user = JSON.parse(window.localStorage.getItem('user'));
    return user != null;
}
