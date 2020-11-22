import React from 'react';
import { Link } from 'react-router-dom';

class PhotosIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { photo } = this.props;
        return (
            <div className="photo-item">
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.photoUrl}  alt={photo.description}/>
                </Link>
                <p>{photo.description}</p>
            </div>
        );
    }
}

export default PhotosIndexItem;