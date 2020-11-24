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
                <div className="photo-array">
                    <h3 className="explore">Explore</h3>
                    {photos.map(photo => <PhotosIndexItem key={photo.id} photo={photo} displayName={this.props.users[photo.user_id].email.split("@")[0]} />)}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default PhotosIndex;