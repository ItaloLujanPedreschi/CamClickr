import { RECEIVE_ALBUM_ERRORS, RECEIVE_ALBUM, RECEIVE_ALBUMS } from './../actions/album_actions';

const albumErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUM_ERRORS:
            return action.errors ? action.errors : [];
        case RECEIVE_ALBUM:
            return [];
        default:
            return state;
    }
}

export default albumErrorsReducer;