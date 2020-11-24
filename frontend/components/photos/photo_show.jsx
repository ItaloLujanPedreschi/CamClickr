import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPhoto(this.props.match.params.photoId);
    }

    render() {
        const { photo } = this.props;
        let backLink;
        let backLinkText;
        if (this.props.location.pathname.includes("explore")) {
            backLink = "/explore"
            backLinkText = "explore";
        } else {
            backLink = `/photos/${photo.user_id}`
            backLinkText = "photostream";
        }
        if (photo) {
            return (
                <div className="photo-container">
                    <div className="photo-show">
                        <div className="photo">
                            <img src={photo.photoUrl} alt={photo.description} />
                        </div>
                        <Link to={backLink}>Back to {backLinkText}</Link>
                    </div>
                    <div className="photo-info">
                        <p>{this.props.users[photo.user_id].fname}</p>
                        <h3>{photo.title}</h3>
                        <p>{photo.description}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <p>Loading photo...</p>
            );
        }
    }
}

export default PhotoShow;