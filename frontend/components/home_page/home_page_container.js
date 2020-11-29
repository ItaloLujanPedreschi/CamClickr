import { connect } from 'react-redux';
import { login } from './../../actions/session_actions';
import HomePage from './home_page';

const mapDispatchToProps = dispatch => ({
    demoLogin: user => dispatch(login(user))
});

export default connect(
    null,
    mapDispatchToProps
)(HomePage);