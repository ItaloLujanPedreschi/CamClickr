import { connect } from 'react-redux';
import { postTag } from './../../actions/tag_actions';
import TagForm from './tag_form';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    postTag: tag => dispatch(postTag(tag))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagForm);