export const selectAllPhotos = state => {
    return Object.values(state.entities.photos)
};

export const selectAllAlbums = state => {
    return Object.values(state.entities.albums)
};

export const selectAllComments = state => {
    return Object.values(state.entities.comments)
};

export const selectAllTags = state => {
    return Object.values(state.entities.tags)
};