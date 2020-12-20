export const getTags = () => {
    return $.ajax({
        url: '/api/tags',
        method: 'GET'
    });
}

export const getTag = id => {
    return $.ajax({
        url: `/api/tags/${id}`,
        method: 'GET'
    });
}

export const postTag = formData => {
    return $.ajax({
        url: `/api/tags`,
        method: 'POST',
        data: formData
    });
}

export const deleteTag = tagId => {
    return $.ajax({
        url: `/api/tags/${tagId}`,
        method: 'DELETE'
    });
}