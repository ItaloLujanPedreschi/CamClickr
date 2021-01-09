import React from 'react';
import TagShowItem from './tag_show_item';

class TagShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getPhotos();
        this.props.getTags();
    }

    render() {
        const { photos, tags } = this.props;

        let tagName = this.props.location.pathname.split("/")[3];
        
        let filteredTags = tags.filter(tag => tag.name === tagName);

        let tagPhotoIds = filteredTags.map(tag => tag.photo_id);
        debugger;

        if (tagPhotoIds > 0) {
            return (
                <div className="explore-background">
                    <div className="photo-array">
                        <h3 className="explore">Explore</h3>
                        <div className="photo-grid">
                            {tagPhotoIds.map(photoId => <TagShowItem key={photoId} photo={photo[photoId]} displayName={this.props.users[photo.user_id].email.split("@")[0]} />)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default TagShow;