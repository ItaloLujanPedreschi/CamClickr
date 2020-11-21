import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const { photos } = this.props;
        return (
            <div className="photo-array">
                {photos.map(photo => <PhotosIndexItem key={photo.id} photo={photo} />)}
            </div>
        );
    }
}

export default PhotosIndex;