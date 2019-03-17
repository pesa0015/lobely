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
        case 'UPDATE_HEART':
            return {
               ...state,
               data: state.data.map(
                   (data) => data.id === notification.id ? {...data, status: action.payload.status} : data
               )
            }
        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                count: {
                    hearts: state.count.hearts - 1,
                    messages: state.count.messages
                }
            }
        default:
            return state;
    }
}

export default notification;
