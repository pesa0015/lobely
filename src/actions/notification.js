export function fetchNotificationsCount(notifications) {
    return {
        type: 'FETCH_NOTIFICATIONS_COUNT',
        payload: notifications
    }
}