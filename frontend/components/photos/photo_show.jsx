import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { CgTrash } from 'react-icons/cg';
import CommentsIndexContainer from './../comments/comments_index_container';
import TagsIndexContainer from './../tags/tags_index_container';
import { BiEdit } from 'react-icons/bi';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            editPhoto: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.editPhoto = this.editPhoto.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getPhoto(this.props.match.params.photoId)
            .then(null,
                () => this.props.history.push(`/photos/${this.props.currentUser.id}`));
    }

    handleDelete(e) {
        e.preventDefault;
        this.props.deletePhoto(this.props.photo.id)
            .then(this.props.history.push(`/photos/${this.props.currentUser.id}`));
    }

    handleInput(field) {
        return (e) => {
            e.preventDefault();
            this.setState({ [field]: e.target.value });
        }
    }

    editPhoto() {
        this.setState({
            title: this.props.photo.title,
            description: this.props.photo.description,
            editPhoto: true
        });
    }

    handleEditSubmit(e) {
        e.preventDefault();
        this.props.editPhoto({ photo: { title: this.state.title, description: this.state.description } }, this.props.photo.id);
        this.setState({
            title: "",
            description: "",
            editPhoto: false
        });
    }

    render() {
        const { photo, currentUser } = this.props;

        if (photo !== undefined) {
            const photoDelete = photo && photo.user_id == currentUser.id ? (
                <button
                    className="photo-delete-button"
                    onClick={this.handleDelete}
                    type="button"
                >
                    <CgTrash />
                </button>
            ) : (null)

            let photoInfoOrEdit; 
            
            if (this.state.editPhoto && currentUser.id == photo.user_id) {
                photoInfoOrEdit = (
                    <form
                        id="edit-photo"
                        onSubmit={this.handleEditSubmit}
                    >
                        <input
                            id="edit-photo-title"
                            type="text"
                            onChange={this.handleInput("title")}
                            value={this.state.title}
                        />
                        <textarea
                            id="edit-photo-description"
                            onChange={this.handleInput("description")}
                            value={this.state.description}
                        ></textarea>
                        <input
                            id="edit-photo-submit"
                            type="submit"
                            value="Done"
                        />
                    </form>
                )
            } else {
                if (currentUser.id == photo.user_id) {
                    photoInfoOrEdit = (
                        <div
                            className="photo-info-details"
                            onClick={this.editPhoto}
                        >
                            <BiEdit />
                            <h3>{photo.title}</h3>
                            <p>{photo.description}</p>
                        </div>
                    )
                } else {
                    photoInfoOrEdit = (
                        <div
                            className="photo-details-not-owner"
                        >
                            <BiEdit />
                            <h3>{photo.title}</h3>
                            <p>{photo.description}</p>
                        </div>
                    )
                }
            }

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
                        <div
                            className="photo-details"
                        >
                            {photoInfoOrEdit}
                        </div>
                    </div>
                    <div className="photo-social">
                        <div className="photo-social-left">
                            <CommentsIndexContainer photoId={photo.id} photoOwnerId={photo.user_id} />
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