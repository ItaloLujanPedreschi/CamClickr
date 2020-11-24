import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(
    mapStateToProps,
    null
)(Footer);