import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from './../../reducers/selectors';
import PhotosIndex from './photos_index';

const mapStateToProps = state => ({
    photos: selectAllPhotos(state)
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotosIndex);