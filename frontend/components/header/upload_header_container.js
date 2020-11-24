import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UploadHeader from './upload_header';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadHeader);