export const getPhotos = () => {
    return $.ajax({
        url: '/api/photos',
        method: 'GET'
    });
}

export const getPhoto = id => {
    return $.ajax({
        url: `/api/photos/${id}`,
        method: 'GET'
    });
}

export const postPhoto = photo => {
    return $.ajax({
        url: `/api/photos`,
        method: 'POST',
        data: { photo }
    });
}