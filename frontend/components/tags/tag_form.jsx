import React from 'react';

class TagForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo_id: this.props.photoId,
            name: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUpdate() {
        if (this.state.photo_id !== this.props.photoId) {
            this.setState({ photo_id: this.props.photoId });
        }
    }

    handleInput() {
        return e => {
            e.preventDefault();
            this.setState({ name: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postTag({ tag: this.state });
        this.setState({ name: "" });
    }

    render() {
        let disabled;
        let blur;

        if (this.state.name !== "") {
            disabled = false;
            blur = this.handleSubmit;
        } else {
            disabled = true;
            blur = null;
        }

        return (
            <form
                id="tag-form"
                className="hidden"
                onSubmit={this.handleSubmit}
            >
                <input
                    id="tag-name"
                    type="text"
                    onChange={this.handleInput()}
                    onBlur={blur}
                    value={this.state.name}
                    placeholder="Add a tag"
                />
                <input
                    id="tag-submit"
                    type="submit"
                    disabled={disabled}
                />
            </form>
        )
    }
}

export default TagForm;