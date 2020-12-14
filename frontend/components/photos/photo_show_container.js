import { connect } from 'react-redux';
import { getPhoto, deletePhoto } from '../../actions/photo_actions';
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
    getPhoto: photoId => dispatch(getPhoto(photoId)),
    deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoShow);