import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { photo, displayName, albumId } = this.props;
        return (
            <div className="photo-item">
                <Link to={`/photos/${displayName}/${photo.id}/album/${albumId}`}>
                    <img src={photo.photoUrl} alt={photo.description} />
                </Link>
                <div className="photo-overlay">
                    <p className="photo-title">{photo.title}</p>
                    <Link className="photo-user-link" to={`/photos/${photo.user_id}`}>
                        by {displayName}
                    </Link>
                </div>
            </div>
        );
    }
}

export default AlbumShowItem;