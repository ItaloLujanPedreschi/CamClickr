import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from './../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            let comments = Object.values(action.comments);
            comments.forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;
        case RECEIVE_COMMENT:
            const newComment = { [action.comment.id]: action.comment };
            return Object.assign({}, state, newComment);
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;