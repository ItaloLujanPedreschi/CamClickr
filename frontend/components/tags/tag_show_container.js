import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import { getTags } from './../../actions/tag_actions';
import { getUsers } from './../../actions/user_actions';
import { selectAllTags } from './../../reducers/selectors';
import TagShow from './tag_show';

const mapStateToProps = state => ({
    photos: state.entities.photos,
    users: state.entities.users,
    tags: selectAllTags(state)
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos()),
    getTags: () => dispatch(getTags()),
    getUsers: () => dispatch(getUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagShow);