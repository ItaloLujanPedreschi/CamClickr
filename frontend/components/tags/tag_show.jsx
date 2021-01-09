import React from 'react';
import TagShowItem from './tag_show_item';

class TagShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPhotos();
        this.props.getUsers();
        this.props.getTags();
    }

    render() {
        const { photos, tags, users } = this.props;

        let tagName = this.props.location.pathname.split("/")[3];
        let filteredTags = tags.filter(tag => tag.name === tagName);
        let tagPhotoIds = filteredTags.map(tag => tag.photo_id);

        // debugger;
        if (Object.keys(photos).length > 0 && tagPhotoIds > 0) {
            return (
                <div className="explore-background">
                    <div className="photo-array">
                        <h3 className="explore">{tagName}</h3>
                        <div className="photo-grid">
                            {tagPhotoIds.map(photoId => {
                                return (
                                    <TagShowItem
                                        key={photoId}
                                        photo={photos[photoId]}
                                        displayName={users[photos[photoId].user_id].email.split("@")[0]}
                                        tag={tagName}
                                    />
                                )
                            })}
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