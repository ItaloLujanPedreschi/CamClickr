import React from 'react';

class PhotoFormItem {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.file.file,
            description: ""
        }
        this.hideClose = this.hideClose.bind(this);
        this.shoeClose = this.showClose.bind(this);
    }

    hideClose(id) {
        const button = document.getElementById(`removeImage-${id}`);
        button.classList.add("hidden");
    }

    showClose(id) {
        const button = document.getElementById(`removeImage-${id}`);
        button.classList.remove("hidden");
    }

    render() {
        const { file } = this.props;
        let style = {
            marginTop: '14px',
            backgroundImage: 'url(' + file.url + ')',
            backgroundSize: '169px',
            minWidth: '169px',
            minHeight: '94px',
            maxHeight: '130px',
            backgroundRepeat: 'no-repeat',
        }
        return (
            <button
                className={`previewBox-${file.idx}`}
                onClick={this.props.selectSelf(file.idx)}>
                <div
                    id={`removeImage-${file.idx}`}
                    className='hidden'>
                </div>
                <div
                    className={`thumbnail-${file.idx}`}
                    style={style}
                    name={file.idx}
                    // onMouseEnter={this.revealXbutton(file.idx)}
                    // onMouseLeave={this.hideXbutton(file.idx)}
                >
                </div>
                <div className="uploadInput-wrapper">
                    <input
                        type="text"
                        className="uploadInputs"
                        defaultValue={this.state.title}
                        onChange={this.props.updateInput(file.idx)}
                    />
                    <input
                        type="textarea"
                        className="uploadInputs"
                        defaultValue="Add a description"
                        onChange={this.props.updateInput(file.idx)}
                    />
                </div>
            </button>
        )
    }

}

export default PhotoUploadItem;