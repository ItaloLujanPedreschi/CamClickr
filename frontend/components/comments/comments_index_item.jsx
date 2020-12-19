import React from 'react';
import { CgTrash } from 'react-icons/cg';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {

    }

    render() {
        const { comment } = this.props;

        return (
            <div className="comment">
                <div className="comment-content">
                    <p className="comment-user"></p>
                    <p className="comment-body">{comment.body}</p>
                </div>
                <div className="comment-actions">
                    <button
                        className="comment-delete-button"
                        onClick={this.handleDelete}
                        type="button"
                    >
                        <CgTrash />
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentsIndexItem;