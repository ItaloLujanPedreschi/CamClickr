import { connect } from 'react-redux';
import CommentsIndexItem from './comments_index_item';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    deleteComment: commentId => dispatch(getComments(commentId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsIndexItem);