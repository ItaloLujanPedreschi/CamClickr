import React from 'react';

class PhotoFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.file.file.name,
            description: ""
        }
    }

    render() {
        const { file } = this.props;
        return (
            <button
                className={`thumbnails-container-${file.index}`}
                onClick={this.props.select(file.index)}>
                <div
                    className={`thumbnail-${file.index}`}
                    name={file.index}
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