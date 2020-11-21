export const selectAllPhotos = state => {
    return Object.values(state.entities.photos)
};