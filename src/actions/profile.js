export function fetchProfile(user) {
    return {
        type: 'FETCH_PROFILE',
        payload: user
    }
}

export function updateBio(user) {
    return {
        type: 'UPDATE_BIO',
        payload: user
    }
}

export function updateEmail(user) {
    return {
        type: 'UPDATE_EMAIL',
        payload: user
    }
}
