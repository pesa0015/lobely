export function fetchUsers(users) {
    return {
        type: 'FETCH_USERS',
        payload: users
    }
}

export function listUsers() {
    return {
        type: 'LIST_USERS'
    }
}

export function deleteUsers() {
    return {
        type: 'DELETE_USERS'
    }
}
