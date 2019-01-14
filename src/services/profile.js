import http from './httpHelper'

export function getProfile() {
    return http('/user/profile/');
}

export function updateProfile(payload) {
    return http.put('/user/profile/', payload);
}

export function updatePassword(current, newPassword, repeatNew) {
    let payload = JSON.stringify({
        currentPassword: current,
        newPassword: newPassword,
        repeatNewPassword: repeatNew
    });

    return http.put('/user/profile/password', payload);
}

export function getNotificationsCount() {
    return http('/notifications/count');
}
