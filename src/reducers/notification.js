const initialState = {
    count: 0,
    data: []
}

const notification = (state = initialState, action) => {
    const notification = action.payload;

    switch (action.type) {
        case 'DO_LOGOUT':
            return {
                count: 0,
                data: []
            }
        case 'FETCH_NOTIFICATIONS_COUNT':
            return {
                ...state,
                count: notification.count
            }
        case 'FETCH_NOTIFICATIONS':
            return {
                ...state,
                data: notification
            }
        default:
            return state;
    }
}

export default notification;
