import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            let newState = {}
            let photos = Object.values(action.photos);
            photos.forEach(photo => {
                newState[photo.id] = photo;
            });
            return newState;
        case RECEIVE_PHOTO:
            const newPhoto = { [action.photo.id]: action.photo };
            return Object.assign({}, state, newPhoto);
        default:
            return state;
    }
}

export default photosReducer;