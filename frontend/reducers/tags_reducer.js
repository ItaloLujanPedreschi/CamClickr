import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from './../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TAGS:
            let tags = Object.values(action.tags);
            tags.forEach(tag => {
                newState[tag.id] = tag;
            });
            return newState;
        case RECEIVE_TAG:
            const newTag = { [action.tag.id]: action.tag };
            return Object.assign({}, state, newTag);
        case REMOVE_TAG:
            delete newState[action.tagId];
            return newState;
        default:
            return state;
    }
}

export default tagsReducer;