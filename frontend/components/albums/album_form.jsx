import React from 'react';
import { Link } from 'react-router-dom';

class AlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "new album",
            description: "",
            photo_ids: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhotoClick = this.handlePhotoClick.bind(this);
    }

    componentDidMount() {
        this.props.getPhotos();
    }

    handlePhotoClick(e) {
        let photoId = parseInt(e.currentTarget.id);
        let checkPhotoAlreadySelected = this.state.photo_ids.indexOf(photoId);
        let new_photo_ids = Array.from(this.state.photo_ids);
        if (checkPhotoAlreadySelected === -1) {
            e.currentTarget.classList.add("selected-for-album");
            new_photo_ids.push(photoId);
            this.setState({ photo_ids: new_photo_ids });
        } else {
            e.currentTarget.classList.remove("selected-for-album");
            new_photo_ids.splice(checkPhotoAlreadySelected, 1);
            this.setState({ photo_ids: new_photo_ids });
        }
    }

    handleInput(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postAlbum({ album: this.state })
        this.props.history.push(`/photos/${this.props.currentUser.id}/albums`);
    }

    render() {
        let { currentUser, photos } = this.props;

        const userPhotos = photos.filter(photo => {
            return parseInt(photo.user_id) === currentUser.id;
        });

        let photoArray = (
            userPhotos.map(photo => {
                return (
                    <img key={photo.id} id={photo.id} className="album-form-photo" src={photo.photoUrl} onClick={this.handlePhotoClick} />
                )
            })
        )

        let numItemsText;

        if (this.state.photo_ids.length === 1) {
            numItemsText = "item";
        } else {
            numItemsText = "items";
        }

        let disabled;

        if (this.state.name === "") {
            disabled = true;
        } else {
            disabled = false;
        }
        
        return (
            <form className="album-form" onSubmit={this.handleSubmit}>
                <div className="album-form-left">
                    <div className="album-form-inputs">
                        <p><span>{this.state.photo_ids.length}</span> {numItemsText} in the album</p>
                        <input
                            id="album-name"
                            type="text"
                            onChange={this.handleInput("name")}
                            value={this.state.name}
                        />
                        <textarea
                            id="album-description"
                            onChange={this.handleInput("description")}
                            value={this.state.description}
                        ></textarea>
                        <div className="album-buttons">
                            <input
                                type="submit"
                                value="SAVE"
                                disabled={disabled}
                            />
                            <Link to={`/photos/${currentUser.id}/albums`}>
                                CANCEL
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="album-form-photos">
                    {photoArray}
                </div>
            </form>
        )
    }
}

export default AlbumForm;