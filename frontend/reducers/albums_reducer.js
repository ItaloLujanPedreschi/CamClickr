import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            let albums = Object.values(action.albums);
            albums.forEach(album => {
                newState[album.id] = album;
            });
            return newState;
        case RECEIVE_ALBUM:
            const newAlbum = { [action.album.id]: action.album };
            return Object.assign({}, state, newAlbum);
        case REMOVE_ALBUM:
            delete newState[action.albumId];
            return newState;
        default:
            return state;
    }
}

export default albumsReducer;