export const getComments = () => {
    return $.ajax({
        url: '/api/comments',
        method: 'GET'
    });
}

export const getComment = id => {
    return $.ajax({
        url: `/api/comments/${id}`,
        method: 'GET'
    });
}

export const postComment = formData => {
    return $.ajax({
        url: `/api/comments`,
        method: 'POST',
        data: formData
    });
}

export const deleteComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    });
}