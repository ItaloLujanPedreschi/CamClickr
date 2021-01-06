import { connect } from 'react-redux';
import { deleteComment } from './../../actions/comment_actions';
import CommentsIndexItem from './comments_index_item';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsIndexItem);