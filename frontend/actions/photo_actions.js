import * as PhotoAPIUtil from './../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

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

export const getPhotos = () => dispatch => PhotoAPIUtil.getPhotos()
    .then(photos => dispatch(receivePhotos(photos)));

export const getPhoto = id => dispatch => PhotoAPIUtil.getPhoto(id)
    .then(photo => {
        dispatch(receivePhoto(photo));
        return photo;
    });

export const postPhoto = photoForms => dispatch => PhotoAPIUtil.postPhoto(photoForms)
    .then(photos => dispatch(receivePhotos(photos)),
        errors => dispatch(receivePhotoErrors(errors.responseJSON)));