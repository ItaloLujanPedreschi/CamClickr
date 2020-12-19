import * as CommentAPIUtil from './../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const getComments = () => dispatch => CommentAPIUtil.getComments()
    .then(comments => dispatch(receiveComments(comments)));

export const getComment = id => dispatch => CommentAPIUtil.getComment(id)
    .then(comment => dispatch(receiveComment(comment)));

export const postComment = commentForm => dispatch => CommentAPIUtil.postComment(commentForm)
    .then(comments => dispatch(receiveComments(comments)),
        errors => dispatch(receiveCommentErrors(errors.responseJSON)))
;

export const deleteComment = commentId => dispatch => CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)));