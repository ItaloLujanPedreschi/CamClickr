import React from 'react';

class PhotoFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.file.file.name,
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
        return (
            <button
                className={`thumbnails-container-${file.index}`}
                onClick={this.props.select(file.index)}>
                {/* <div
                    id={`removeImage-${file.index}`}
                    className='hidden'>
                </div> */}
                <div
                    className={`thumbnail-${file.index}`}
                    // style={style}
                    name={file.index}
                    // onMouseEnter={this.revealXbutton(file.index)}
                    // onMouseLeave={this.hideXbutton(file.index)}
                >
                    <img src={file.url} />
                </div>
                <div className="upload-inputs">
                    <input
                        type="text"
                        defaultValue={this.state.title}
                        onChange={this.props.handleInput(file.index, "titles")}
                    />
                    <textarea
                        rows="2"
                        placeholder="Add a description"
                        onChange={this.props.handleInput(file.index, "descriptions")}
                    ></textarea>
                </div>
            </button>
        )
    }

}

export default PhotoFormItem;