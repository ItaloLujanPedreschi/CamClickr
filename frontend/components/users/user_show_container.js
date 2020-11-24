import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from './../../reducers/selectors';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
    photos: selectAllPhotos(state),
    user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);