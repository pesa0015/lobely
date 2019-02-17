import http from './httpHelper'

export function getNotifications() {
    return http('/notifications/');
}
