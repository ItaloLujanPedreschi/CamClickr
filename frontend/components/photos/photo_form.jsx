import React from 'react';
import PhotoFormItem from './photo_form_item';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            titles: [],
            descriptions: [],
            selected: null
        };
        this.deselect = this.deselect.bind(this);
        this.select = this.select.bind(this);
        this.deleteThumbnail = this.deleteThumbnail.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    deselect(e) {
        e.preventDefault();
        e.stopPropagation();
        const selectedImages = document.getElementsByClassName("selected-thumbnail");
        Array.from(selectedImages).map(image => {
            return image.classList.remove("selected-thumbnail");
        });
        this.setState({ selected: null });
    }

    select(id) {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            const image = document.getElementsByClassName(`thumbnail-${id}`);
            this.deselect(e);
            image[0].classList.add("selected-thumbnail")
            this.setState({ selected: id });
        };
    }

    deleteThumbnail() {
        const nextState = Object.assign({}, this.state)
        const index = this.state.selected;
        delete nextState.files[index];
        delete nextState.titles[index];
        delete nextState.descriptions[index];
        nextState.selected = null;
        this.setState(nextState);
    }

    handleInput(id, field) {
        return (e) => {
            e.preventDefault();
            let nextState = Object.assign({}, this.state);
            nextState[field][id] = { index: id, value: e.target.value }
            this.setState(nextState);
        }
    }

    handleFile(e) {
        const nextState = Object.assign({}, this.state);
        const uploadFile = e.currentTarget.files;
        let i = 0;
        let j = 0;
        while (i < uploadFile.length) {
            if (nextState.files[j] !== undefined) {
                j++;
            } else {
                nextState.files[j] = {
                    file: uploadFile[i],
                    url: URL.createObjectURL(uploadFile[i]),
                    index: j
                }
                nextState.titles[j] = {
                    value: ""
                }
                nextState.descriptions[j] = {
                    value: ""
                }
                i++;
            }
        }
        this.setState({ photoFile: e.target.files[0] })
    }

    handleSubmit(e) {
        const state = this.state;
        let filesUploaded = 0;
        while (filesUploaded < state.files.length) {
            let photoInfo = new FormData();
            photoInfo.append("photo[image]", state.files[filesUploaded].file);
            photoInfo.append("photo[title]", state.titles[filesUploaded].value === "" ? "Untitled" : state.titles[filesUploaded].value);
            photoInfo.append("photo[description]", state.descriptions[filesUploaded].value === "" ? "No Description" : state.descriptions[filesUploaded].value);
            this.props.postPhoto(photoInfo)
                .then(filesUploaded++);
        }
        if (filesUploaded === state.files.length) {
            this.props.history.push(`/photos/${this.props.currentUser.id}`);
        }
    }

    render() {
        const thumbnails = this.state.files.map(file => {
            return (
                <PhotoFormItem
                    key={file.index}
                    file={file}
                    deselect={this.deselect}
                    select={this.select}
                    handleInput={this.handleInput}
                />
            );
        })

        const numPhotos = this.state.files.filter(Boolean).length;
        let centerAddPhoto = numPhotos === 0 ? (
            <div className="center-add-photo-button">
                <input
                    id="center-add-photo-button"
                    type="file"
                    onChange={this.handleFile}
                    multiple
                />
                <label htmlFor="center-add-photo-button">
                    Choose photos to upload
                </label>
            </div>
        ) : (null)

        let disableButton;
        (this.state.selected === null) ? disableButton = true : disableButton = false;
        let submitButtonText;
        if (numPhotos === 0) {
            submitButtonText = "Upload";
        } else if (numPhotos === 1) {
            submitButtonText = `Upload ${numPhotos} Photo`;
        } else if (numPhotos > 1) {
            submitButtonText = `Upload ${numPhotos} Photos`;
        }

        return (
            <div className="upload-form-container">
                <div className="upload-bar">
                    <div className="upload-bar-left">
                        <div className="upload-add-remove">
                            <div className="upload-add">
                                <input
                                    id="add-photo-button"
                                    type="file"
                                    onChange={this.handleFile}
                                    multiple
                                />
                                <label htmlFor="add-photo-button">
                                    <div className="add-image">Add</div>
                                </label>
                            </div>
                            <hr className="upload-add-remove-divider" />
                            <button onClick={this.deleteThumbnail} disabled={disableButton}>
                                <div className="remove-image">Remove</div>
                            </button>
                        </div>
                    </div>
                    <button
                        className="upload-button"
                        onClick={this.handleSubmit}
                    >{submitButtonText}</button>
                </div>
                <form className="upload-display" onClick={this.deselectAll}>
                    {centerAddPhoto}
                    <div className="thumbnails-array">
                        {thumbnails}
                    </div>
                </form>
            </div>
        );
    }
}

export default PhotoForm;