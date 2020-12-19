import { connect } from 'react-redux';
import { getComments } from './../../actions/comment_actions';
import { selectAllComments } from './../../reducers/selectors';
import CommentsIndex from './comments_index';

const mapStateToProps = state => ({
    comments: selectAllComments(state),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    getComments: () => dispatch(getComments())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsIndex);