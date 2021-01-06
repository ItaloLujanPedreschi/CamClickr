import { connect } from 'react-redux';
import { getPhotos, editPhoto, deletePhoto } from '../../actions/photo_actions';
import { getUsers } from '../../actions/user_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
    return {
        photoId: ownProps.match.params.photoId,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        photos: state.entities.photos
    }
};

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    getPhotos: () => dispatch(getPhotos()),
    editPhoto: (photoForm, id) => dispatch(editPhoto(photoForm, id)),
    deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoShow);