import { connect } from 'react-redux';
import { postComment } from './../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    postComment: comment => dispatch(postComment(comment))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm);