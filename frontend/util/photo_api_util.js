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

export const postPhoto = formData => {
    return $.ajax({
        url: `/api/photos`,
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
}

export const deletePhoto = photoId => {
    return $.ajax({
        url: `/api/photos/${photoId}`,
        method: 'DELETE'
    });
}