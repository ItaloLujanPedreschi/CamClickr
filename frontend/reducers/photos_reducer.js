import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            let clearState = {};
            let photos = Object.values(action.photos);
            photos.forEach(photo => {
                clearState[photo.id] = photo;
            });
            return clearState;
        case RECEIVE_PHOTO:
            const newPhoto = { [action.photo.id]: action.photo };
            return Object.assign({}, state, newPhoto);
        case REMOVE_PHOTO:
            let newState = Object.assign({}, state);
            delete newState[action.photoId];
            return newState;
        default:
            return state;
    }
}

export default photosReducer;