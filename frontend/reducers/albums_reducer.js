import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            let clearState = {};
            let albums = Object.values(action.albums);
            albums.forEach(album => {
                clearState[album.id] = album;
            });
            return clearState;
        case RECEIVE_ALBUM:
            const newAlbum = { [action.album.id]: action.album };
            return Object.assign({}, state, newAlbum);
        case REMOVE_ALBUM:
            let newState = Object.assign({}, state);
            delete newState[action.albumId];
            return newState;
        default:
            return state;
    }
}

export default albumsReducer;