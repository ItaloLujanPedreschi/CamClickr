import { connect } from 'react-redux';
import { getPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.photoId]
    return {
        photo: photo,
        users: state.entities.users
    }
};

const mapDispatchToProps = dispatch => ({
    getPhoto: id => dispatch(getPhoto(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoShow);