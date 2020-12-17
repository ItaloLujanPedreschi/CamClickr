import React from 'react';
import { Link } from 'react-router-dom';

class AlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "new album",
            description: "",
            photoIds: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getPhotos();
    }

    handleInput(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        let { currentUser, photos } = this.props;
        let numItemsText;

        if (this.state.photoIds.length === 1) {
            numItemsText = "item";
        } else {
            numItemsText = "items";
        }

        let disabled;

        if (this.state.name === "") { //&& this.state.photoIds.length === 0) {
            disabled = true;
        } else {
            disabled = false;
        }

        return (
            <form className="album-form" onSubmit={this.handleSubmit}>
                <div className="album-form-left">
                    <div className="album-form-inputs">
                        <p><span>{this.state.photoIds.length}</span> {numItemsText} in the album</p>
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


                </div>
            </form>
        )
    }
}

export default AlbumForm;