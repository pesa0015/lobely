export function fetchUsers(users) {
    return {
        type: 'FETCH_USERS',
        payload: users
    }
}

export function addUser(user) {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export function listUsers() {
    return {
        type: 'LIST_USERS'
    }
}

export function likeUser(id) {
    return {
        type: 'LIKE_USER',
        payload: {
            id: id
        }
    }
}

export function deleteLikeUser(id) {
    return {
        type: 'DELETE_LIKE_USER',
        payload: {
            id: id
        }
    }
}

export function deleteUsers() {
    return {
        type: 'DELETE_USERS'
    }
}
