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
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    deselect(e) {
        e.preventDefault();
        e.stopPropagation();
        const selectedImages = document.getElementsByClassName("selectedThumbnail");
        Array.from(selectedImages).map(image => {
            return image.classList.remove("selectedThumbnail");
        });
        this.setState({ selected: null });
    }

    select(id) {
        return (e) => {
            e.preventDefault();
            // e.stopPropagation();
            const image = document.getElementsByClassName(`thumbnail-${id}`);
            debugger; // see image
            this.deselect(e);
            image[0].classList.add("selectedThumbnail")
            this.setState({ selected: id });
        };
    }

    deleteThumbnail() {
        const nextState = Object.assign({}, this.state)
        const index = this.state.selected;
        delete nextState.files[index];
        delete nextState.title[index];
        delete nextState.description[index];
        this.setState(nextState);
    }

    handleInput(id) {
        debugger; // check what e is
        return (e) => {
            let nextState = Object.assign({}, this.state);
            nextState.titles[id] = { idx: id, value: e.target.value }
            this.setState(nextState);
        }
    }

    handleFile(e) {
        const nextState = Object.assign({}, this.state);
        const uploadFile = e.target.file;

        this.setState({ photoFile: e.target.files[0] })
    }

    handleSubmit(e) {
        this.props.postPhoto(state);
    }

    render() {
        const thumbnails = this.state.files.map(file => {
            return (
                <PhotoFormItem
                    file={file}
                    key={file.idx}
                />
            );
        })

        return (
            <div className="form-container">
                <div className="toolBar">
                        <div className="toolBar-left">
                            <div className="grouping1" >
                                <label className="menu-bar-add" htmlFor="add-button">
                                    <div className="icon-add">Add</div>
                                </label>

                                <button
                                    className="menu-bar-remove"
                                    onClick={this.removeSelected}>
                                    <div className="icon-remove" disabled={disableButton}>Remove</div>
                                </button>

                                <input
                                    id="add-button"
                                    type="file"
                                    onChange={this.handleFile}
                                    multiple
                                />
                            </div>

                            <button className="menu-bar-size">
                                <div className="icon-size">Size</div>
                            </button>

                            <button className="menu-bar-sort">
                                <div className="icon-sort">Sort</div>
                            </button>
                            <button className="menu-bar-all">
                                <div className="icon-all">All</div>
                            </button>
                            <button className="menu-bar-info">
                                <div className="icon-info">Sort</div>
                            </button>


                        </div>

                        <label
                            className="upload-label"
                            htmlFor="upload-button"
                            onClick={this.submitAllPhotos}>
                            Upload {toBeUploaded} Photos
                        </label>
                    </div>
                <form className="content" onClick={this.deselectAll}>

                    <div id="uploadSpread">
                        {preview}
                    </div>


                </form>
                <div className="bottomBar"></div>
            </div>
        );
    }
}

export default PhotoForm;