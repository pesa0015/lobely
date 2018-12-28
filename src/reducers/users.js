const initialState = [];

const userIds = [];

const getUser = (id, state) => {
    let userId = userIds.indexOf(id);
    let userState = state[userId];

    return {
        index: userId,
        user: userState
    }
};

const users = (state = initialState, action) => {
    const user = action.payload;

    switch (action.type) {
        case 'FETCH_USERS':
            userIds.length = 0;
            action.payload.map(user => {
                return userIds.push(user.id);
            });
            return action.payload;
        case 'FETCH_USER':
            if (userIds.indexOf(user.id) === -1) {
                state = [...state, user];
                userIds.push(user.id);
            }
            let id = userIds.indexOf(user.id);
            return state[id];
        case 'LIKE_USER':
            let likeUser = getUser(user.id, state);
            return state.map( (item, index) => {
                if (index !== likeUser.index) {
                    return item;
                }
                return {
                    ...likeUser.user,
                    heart: true
                };
            });
        case 'LIST_USERS':
            return state;
        case 'DELETE_USERS':
            return [];
        default:
            return state;
    }
}

export default users;
