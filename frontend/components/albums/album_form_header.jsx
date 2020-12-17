import React from 'react';
import { Link } from 'react-router-dom';

class AlbumFormHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="album-form-header">
                <div className="album-form-header-logo-container">
                    <Link className="album-logo unselectable" to="/">
                        <img src={`${window.logo}`} />
                        cam clickr
                    </Link>
                </div>
                <div className="album-form-header-tabs">
                    <div className="album-form-photostream-link">
                        <Link to={`/photos/${this.props.currentUser.id}`}>Your Photostream</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumFormHeader;