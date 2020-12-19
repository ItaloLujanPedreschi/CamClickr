import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import { getAlbums, deleteAlbum } from '../../actions/album_actions';
import { selectAllPhotos, selectAllAlbums } from './../../reducers/selectors';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        photos: selectAllPhotos(state),
        albums: selectAllAlbums(state),
        user: state.entities.users[ownProps.match.params.userId]
    }
};

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos()),
    getAlbums: () => dispatch(getAlbums()),
    deleteAlbum: albumId => dispatch(deleteAlbum(albumId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);