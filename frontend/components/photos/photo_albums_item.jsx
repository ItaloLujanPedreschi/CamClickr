import React from 'react';
import { Link } from 'react-router-dom';

class PhotoAlbumsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { album } = this.props;
        let numPhotos = album.photo_ids.length;
        let itemPlural;

        const style = {
            backgroundImage: 'url(' + album.photos[0].photoUrl + ')'
        }

        if (numPhotos === 1) {
            itemPlural = "item";
        } else {
            itemPlural = "items";
        }

        return (
            <div className="photo-albums-item">
                <Link to={`/photos/${album.user_id}/albums/${album.id}`}>
                    <div className="photo-albums-image" style={style}></div>
                </Link>
                <div className="photo-albums-item-info">
                    <Link to={`/photos/${album.user_id}/albums/${album.id}`}>{album.name}</Link>
                    <p>{numPhotos} {itemPlural}</p>
                </div>
            </div>
        )
    }
}

export default PhotoAlbumsItem;