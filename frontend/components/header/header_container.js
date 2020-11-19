import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Greeting from './header';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);