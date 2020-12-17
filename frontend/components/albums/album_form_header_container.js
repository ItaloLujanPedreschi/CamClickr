import { connect } from 'react-redux';
import AlbumFormHeader from './album_form_header';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(
    mapStateToProps,
    null
)(AlbumFormHeader);