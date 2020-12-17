import { connect } from 'react-redux';
import { postAlbum } from './../../actions/album_actions';
import { getPhotos } from './../../actions/photo_actions';
import AlbumForm from './album_form';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    photos: state.entities.photos
    // errors: state.errors.album
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos()),
    postAlbum: album => dispatch(postAlbum(album))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumForm);