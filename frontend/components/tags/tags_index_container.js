import { connect } from 'react-redux';
import { getTags } from './../../actions/tag_actions';
import { selectAllTags } from './../../reducers/selectors';
import TagsIndex from './tags_index';

const mapStateToProps = state => ({
    tags: selectAllTags(state),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    getTags: () => dispatch(getTags())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagsIndex);