import React from 'react';
import { Link } from 'react-router-dom';
import { CgTrash } from 'react-icons/cg';

class UserShowAlbum extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete(e) {
        e.preventDefault;
        this.props.deleteAlbum(this.props.album.id)
            .then(this.props.history.push('/explore'))
    }

    render() {
        const { currentUser, album, displayName } = this.props;

        const style = {
            backgroundImage: 'url(' + album.photos[0].photoUrl + ')'
        }

        const albumDelete = album && album.user_id == currentUser.id ? (
            <button
                className="album-delete-button"
                onClick={this.handleDelete}
                type="button"
            >
                <CgTrash />
            </button>
        ) : (null)

        let numPhotos;

        if (album.photos.length === 1) {
            numPhotos = "photo";
        } else {
            numPhotos = "photos";
        }

        return (
            <div className="album-item" style={style}>
                <div className="album-overlay">
                    <h4 className="album-name">{album.name}</h4>
                    <p className="num-photos">{album.photos.length} {numPhotos}</p>
                </div>
                <div className="album-actions">
                    {albumDelete}
                </div>
            </div>
        );
    }
}

export default UserShowAlbum;