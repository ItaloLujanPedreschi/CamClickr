import { connect } from 'react-redux';
import { getAlbums } from '../../actions/album_actions';
import PhotoAlbums from './photo_albums';

const mapStateToProps = state => {
    return {
        albums: state.entities.albums
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAlbums: () => dispatch(getAlbums())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoAlbums);