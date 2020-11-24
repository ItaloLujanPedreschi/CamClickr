import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import { getUsers } from './../../actions/user_actions';
import { selectAllPhotos } from './../../reducers/selectors';
import PhotosIndex from './photos_index';

const mapStateToProps = state => ({
    photos: selectAllPhotos(state),
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos()),
    getUsers: () => dispatch(getUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotosIndex);