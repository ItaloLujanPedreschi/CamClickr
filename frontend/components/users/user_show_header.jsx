import React from 'react';

class UserShowHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, photos } = this.props;
        const displayName = user.email.split("@")[0];

        let backgroundPhoto;
        let numPhotos;

        if (photos.length > 0) {
            numPhotos = "Photos";
            backgroundPhoto = photos[Math.floor(photos.length / 2)];
        } else if (photos.length === 1) {
            numPhotos = "Photo";
            backgroundPhoto = null;
        } else {
            numPhotos = "Photos";
            backgroundPhoto = null;
        }

        if (backgroundPhoto) {
            const style = {
                backgroundImage: 'url(' + backgroundPhoto.photoUrl + ')'
            }
            return (
                <div
                className="user-header"
                style={style}
                >
                    <div className="user-header-gradient">
                        <div className="user-header-content">
                            <h1>{user.fname} {user.lname}</h1>
                            <div className="user-header-subcontent">
                                <p>{displayName}</p>
                                <p>{photos.length} {numPhotos}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default UserShowHeader;