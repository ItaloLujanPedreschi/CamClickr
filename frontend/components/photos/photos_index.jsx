import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getPhotos();
    }

    render() {
        const { photos, users } = this.props;

        if (Object.values(users).length > 1) {
            return (
                <div className="explore-background">
                    <div className="photo-array">
                        <h3 className="explore">Explore</h3>
                        <div className="photo-grid">
                            {photos.map(photo => <PhotosIndexItem key={photo.id} photo={photo} displayName={this.props.users[photo.user_id].email.split("@")[0]} />)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default PhotosIndex;

// list of photos
// cycle through list scaling photos down to 324px height
// when combined width of scaled down images is greater than container width, stop cycling and scale down images until combined width is equal to container width
// pass heights down as prop
// use props to inline style images