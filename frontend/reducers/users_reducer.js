import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import { RECEIVE_ALL_USERS } from './../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            let newState = {}
            let users = Object.values(action.users);
            users.forEach(user => {
                newState[user.id] = user;
            });
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
}

export default usersReducer;