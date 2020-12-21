import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { CgTrash } from 'react-icons/cg';
import CommentsIndexContainer from './../comments/comments_index_container';
import TagsIndexContainer from './../tags/tags_index_container';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getPhoto(this.props.match.params.photoId);
    }

    handleDelete(e) {
        e.preventDefault;
        this.props.deletePhoto(this.props.photo.id)
            .then(this.props.history.push('/explore'));
    }

    render() {
        const { photo, currentUser } = this.props;
        const photoDelete = photo && photo.user_id == currentUser.id ? (
            <button
                className="photo-delete-button"
                onClick={this.handleDelete}
                type="button"
            >
                <CgTrash />
            </button>
        ) : (null)
        let backLink;
        let backLinkText;

        let path = this.props.location.pathname;
        if (path.includes("explore")) {
            backLink = "/explore"
            backLinkText = "explore";
        } else if (path.includes("album")) {
            backLink = `/photos/${photo.user_id}/albums/${path.split("/")[5]}`
            backLinkText = "album";
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
                        <Link to={backLink}><BiArrowBack />Back to {backLinkText}</Link>
                        {photoDelete}
                    </div>
                    <div className="photo-info">
                        <Link to={`/photos/${photo.user_id}`}>{this.props.users[photo.user_id].fname} {this.props.users[photo.user_id].lname}</Link>
                        <div className="photo-details">
                            <h3>{photo.title}</h3>
                            <p>{photo.description}</p>
                        </div>
                    </div>
                    <div className="photo-social">
                        <div className="photo-social-left">
                            <CommentsIndexContainer photoId={photo.id} />
                        </div>
                        <div className="photo-social-right">
                            <TagsIndexContainer photoId={photo.id} photoOwnerId={photo.user_id} />
                        </div>
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