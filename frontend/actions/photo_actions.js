import * as PhotoAPIUtil from './../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
});

const receivePhotoErrors = errors => ({
    type: RECEIVE_PHOTO_ERRORS,
    errors
});

const removePhoto = photoId => ({
    type: REMOVE_PHOTO,
    photoId
})

export const getPhotos = () => dispatch => PhotoAPIUtil.getPhotos()
    .then(photos => dispatch(receivePhotos(photos)));

export const getPhoto = id => dispatch => PhotoAPIUtil.getPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)));

export const postPhoto = photoForm => dispatch => PhotoAPIUtil.postPhoto(photoForm)
    .then(photos => dispatch(receivePhotos(photos)),
        errors => dispatch(receivePhotoErrors(errors.responseJSON)))
;

export const deletePhoto = photoId => dispatch => PhotoAPIUtil.deletePhoto(photoId)
    .then(() => dispatch(removePhoto(photoId)));