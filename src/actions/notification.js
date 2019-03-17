export function fetchNotificationsCount(notifications) {
    return {
        type: 'FETCH_NOTIFICATIONS_COUNT',
        payload: notifications
    }
}

export function fetchNotifications(notifications) {
    return {
        type: 'FETCH_NOTIFICATIONS',
        payload: notifications
    }
}

export function updateHeartStatus(notification) {
    return {
        type: 'UPDATE_HEART',
        payload: notification
    }
}

export function removeNotification() {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}
