import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import AlbumShowItem from './album_show_item';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAlbum(this.props.match.params.albumId);
    }

    render() {
        const { album, currentUser } = this.props;

        if (album) {
            const style = {
                backgroundImage: 'url(' + album.photos[0].photoUrl + ')'
            }

            let numPhotos;

            if (album.photos.length === 1) {
                numPhotos = "photo";
            } else {
                numPhotos = "photos";
            }

            let description;
            if (album.description === null) {
                description = "No description";
            } else {
                description = album.description
            }

            return (
                <div className="album-container">
                    <div className="album-show-toolbar">
                        <Link to={`/photos/${album.user_id}/albums`}><BiArrowBack />Back to albums list</Link>
                    </div>
                    <div className="album-info" style={style}>
                        <div className="dim">
                            <div className="album-info-head">
                                <h3>{album.name}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="num-photos">
                                <p className="num-photos">{album.photos.length} {numPhotos}</p>
                            </div>
                            <div className="album-return-link">
                                <Link to={`/albums/${album.user_id}`}>By: {this.props.users[album.user_id].fname} {this.props.users[album.user_id].lname}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="album-photos">
                        <div className="photo-grid">
                            {album.photos.map(photo => <AlbumShowItem key={photo.id} photo={photo} displayName={currentUser.email.split("@")[0]} albumId={album.id} />)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <p>Loading album...</p>
            );
        }
    }
}

export default AlbumShow;