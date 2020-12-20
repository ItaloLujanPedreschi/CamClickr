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

    handleInput() {
        return e => {
            e.preventDefault();
            this.setState({ name: e.target.value })
        }
    }

    handleSubmit(e) {
        console.log("click");
        e.preventDefault();
        this.props.postTag({ tag: this.state });
        this.setState({ name: "" });
    }

    render() {
        let disabled;

        if (this.state.name !== "") {
            disabled = false;
        } else {
            disabled = true;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    id="tag-name"
                    type="text"
                    onChange={this.handleInput()}
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