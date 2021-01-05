import React from 'react';
import PhotoAlbumsItem from './photo_albums_item';

class PhotoAlbums extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAlbums();
    }

    render() {
        const { photo, albums } = this.props;
        let albumIds = {};
        photo.albums.forEach(album => albumIds[album.id] = true);

        let albumPlural;
        if (photo.albums.length === 1) {
            albumPlural = "album";
        } else {
            albumPlural = "albums";
        }

        return (
            <div className="photo-albums">
                <h5>This photo is in {photo.albums.length} {albumPlural}</h5>
                <div className="photo-albums-array">
                    {Object.values(albums).map(album => {
                        if (albumIds[album.id]) {
                            return (
                                <PhotoAlbumsItem key={album.id} album={album} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default PhotoAlbums;