import { connect } from 'react-redux';
import { postAlbum } from './../../actions/album_actions';
import AlbumForm from './album_form';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    // errors: state.errors.album
});

const mapDispatchToProps = dispatch => ({
    postAlbum: album => dispatch(postAlbum(album))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumForm);