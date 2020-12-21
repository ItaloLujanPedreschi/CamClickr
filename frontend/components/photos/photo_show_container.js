import { connect } from 'react-redux';
import { getPhoto, editPhoto, deletePhoto } from '../../actions/photo_actions';
import { getUsers } from '../../actions/user_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.photoId]
    return {
        photo: photo,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    getPhoto: photoId => dispatch(getPhoto(photoId)),
    editPhoto: (photoForm, id) => dispatch(editPhoto(photoForm, id)),
    deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoShow);