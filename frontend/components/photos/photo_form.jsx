import React from 'react';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            photoFile: null
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({ description: e.currentTarget.value });
    }

    handleFile(e) {
        this.setState({ photoFile: e.target.files[0] })
    }

    handleSubmit(e) {
        this.props.postPhoto(state);
    }

    render() {
        return (
            <div className="form-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <input
                        className="text-input"
                        type="text"
                        id="description"
                        value={this.state.description}
                        onChange={this.handleInput}
                    />
                    <label
                        className="signup-form-label cursor-text unselectable"
                        htmlFor="description"
                    >Description</label>
                    <input
                        type="file"
                        onChange={this.handleFile}
                    />
                    <input
                        className="cursor-button"
                        type="submit"
                        value="Upload a Photo"
                    />
                </form>
            </div>
        );
    }
}

export default PhotoForm;