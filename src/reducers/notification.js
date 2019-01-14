const initialState = [];

const notification = (state = initialState, action) => {
    const notification = action.payload;

    switch (action.type) {
        case 'FETCH_NOTIFICATIONS_COUNT':
            return notification;
        default:
            return state;
    }
}

export default notification;
