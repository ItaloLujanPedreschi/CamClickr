export const selectAllPhotos = state => {
    return Object.values(state.entities.photos)
};

export const selectAllAlbums = state => {
    return Object.values(state.entities.albums)
};