import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './home_header';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    demoLogin: user => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);