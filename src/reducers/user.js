const initialState = [];

const userIds = [];

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
        case 'LIST_USERS':
            return state;
        case 'DELETE_USERS':
            return [];
        default:
            return state;
    }
}

export default users;
