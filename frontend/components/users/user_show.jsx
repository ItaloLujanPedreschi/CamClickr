import React from 'react';
import UserShowItem from './user_show_item';

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
            <div className="photo-array">
                {userPhotos.map(photo => <UserShowItem key={photo.id} photo={photo} displayName={user.email.split("@")[0]} />)}
            </div>
        );
    }
}

export default UserShow;