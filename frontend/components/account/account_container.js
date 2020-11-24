import { connect } from 'react-redux';
import Account from './account';

const mapStateToProps = (state, ownProps) => ({
    user: "user"
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);