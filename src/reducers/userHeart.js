const initialState = {};

const userHeart = (state = initialState, action) => {
    switch (action.type) {
        case 'LIKE_USER_DIALOG':
            return {
                ...state,
                liked: true,
                userId: action.payload.id
            };
        case 'SHOW_ALL_USERS_AGAIN':
            return {
                ...state,
                liked: false,
                userId: null
            };
        default:
            return state;
    }
}

export default userHeart;
