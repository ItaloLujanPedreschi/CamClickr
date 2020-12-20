import { connect } from 'react-redux';
import { deleteTag } from './../../actions/tag_actions';
import TagsIndexItem from './tags_index_item';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    deleteTag: tagId => dispatch(deleteTag(tagId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagsIndexItem);