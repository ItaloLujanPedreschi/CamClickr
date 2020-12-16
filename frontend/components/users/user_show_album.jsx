import React from 'react';
import { Link } from 'react-router-dom';
import { CgTrash } from 'react-icons/cg';

class UserShowAlbum extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { album, displayName } = this.props;
        const style = {
            backgroundImage: 'url(' + album.photos[0].photoUrl + ')'
        }
        let numPhotos;
        if (album.photos.length === 1) {
            numPhotos = "photo";
        } else {
            numPhotos = "photos";
        }
        return (
            <div className="album-item" style={style}>
                {/* <Link to={`/photos/${displayName}/${photo.id}/photostream`}>
                    <img src={photo.photoUrl} alt={photo.description} />
                </Link> */}
                <div className="album-overlay">
                    <h4 className="album-name">{album.name}</h4>
                    <p className="num-photos">{album.photos.length} {numPhotos}</p>
                </div>
                <CgTrash />
            </div>
        );
    }
}

export default UserShowAlbum;