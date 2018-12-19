import http from './httpHelper'

export function login(payload) {
    return http.post('/auth', payload);
}

export function facebookAuth(payload) {
    return http.post('/auth/facebook', payload);
}

export function register(payload) {
    return http.post('/register', payload);
}

export function forgotPassword(payload) {
    return http.post('/forgot-password', payload);
}

export function resetPassword(payload) {
    return http.post('/reset-password', payload);
}
