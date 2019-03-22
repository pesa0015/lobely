const initialState = {
    data: []
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MESSAGES':
            return {
                ...state,
                data: action.payload
            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                data: {
                    messages: [
                        ...state.data.messages,
                        action.payload
                    ],
                    user: state.data.user
                }
            };
        default:
            return state;
    }
}

export default chat;
