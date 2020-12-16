export const getAlbums = () => {
    return $.ajax({
        url: '/api/albums',
        method: 'GET'
    });
}

export const getAlbum = albumId => {
    return $.ajax({
        url: `/api/albums/${albumId}`,
        method: 'GET'
    });
}

export const postAlbum = formData => {
    return $.ajax({
        url: `/api/albums`,
        method: 'POST',
        data: formData
    });
}

export const deleteAlbum = albumId => {
    return $.ajax({
        url: `/api/albums/${albumId}`,
        method: 'DELETE'
    });
}