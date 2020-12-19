import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo_id: this.props.photoId,
            body: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput() {
        return e => {
            e.preventDefault();
            this.setState({ body: e.target.value })
        }
    }

    handleSubmit(e) {
        console.log("click");
        e.preventDefault();
        this.props.postComment({ comment: this.state });
    }


    render() {
        let disabled;

        if (this.state.body !== "") {
            disabled = false;
        } else {
            disabled = true;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    id="comment-body"
                    onChange={this.handleInput()}
                    value={this.state.body}
                    placeholder="Add a comment"
                ></textarea>
                <input
                    type="submit"
                    value="Comment"
                    disabled={disabled}
                />
            </form>
        )
    }
}

export default CommentForm;