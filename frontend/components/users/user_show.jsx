import React from 'react';
import UserShowItem from './user_show_item';
import UserShowHeader from './user_show_header';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const { photos, user } = this.props;
        const userPhotos = photos.filter(photo => {
            return parseInt(photo.user_id) === user.id;
        });
        return (
            <div className="user-background">
                <UserShowHeader user={user} photos={userPhotos} />
                <div className="user-subheader">
                    <div className="user-subheader-content">
                        <p>Photostream</p>
                    </div>
                </div>
                <div className="photo-array">
                    <div className="photo-grid">
                        {userPhotos.map(photo => <UserShowItem key={photo.id} photo={photo} displayName={user.email.split("@")[0]} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserShow;