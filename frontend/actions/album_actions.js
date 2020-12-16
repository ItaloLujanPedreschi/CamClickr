import * as AlbumAPIUtil from './../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

const receiveAlbumErrors = errors => ({
    type: RECEIVE_ALBUM_ERRORS,
    errors
});

const removeAlbum = albumId => ({
    type: REMOVE_ALBUM,
    albumId
})

export const getAlbums = () => dispatch => AlbumAPIUtil.getAlbums()
    .then(albums => {
        dispatch(receiveAlbums(albums));
    });

export const getAlbum = id => dispatch => AlbumAPIUtil.getAlbum(id)
    .then(album => {
        dispatch(receiveAlbum(album));
        return album;
    });

export const postAlbum = albumForm => dispatch => AlbumAPIUtil.postAlbum(albumForm)
    .then(albums => dispatch(receiveAlbums(albums)),
        errors => dispatch(receiveAlbumErrors(errors.responseJSON)))
;

export const deleteAlbum = albumId => dispatch => AlbumAPIUtil.deleteAlbum(albumId)
    .then(() => dispatch(removeAlbum(albumId)));