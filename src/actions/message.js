export function fetchMessagesCount(messages) {
    return {
        type: 'FETCH_MESSAGES_COUNT',
        payload: messages
    }
}

export function fetchUsersWithMessages(messages) {
    return {
        type: 'FETCH_USERS_WITH_MESSAGES',
        payload: messages
    }
}

export function fetchMessages(messages) {
    return {
        type: 'FETCH_MESSAGES',
        payload: messages
    }
}

export function addMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        payload: message
    }
}
