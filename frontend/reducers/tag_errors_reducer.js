import { RECEIVE_TAG_ERRORS, RECEIVE_TAG, RECEIVE_TAGS } from './../actions/tag_actions';

const tagErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TAG_ERRORS:
            return action.errors ? action.errors : [];
        case RECEIVE_TAG:
            return [];
        default:
            return state;
    }
}

export default tagErrorsReducer;