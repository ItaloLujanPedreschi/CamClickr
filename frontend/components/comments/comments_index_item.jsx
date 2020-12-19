import React from 'react';
import { Link } from 'react-router-dom';
import { CgTrash } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete() {
        debugger;
        this.props.deleteComment(this.props.comment.id);
    }

    handleEdit() {

    }

    render() {
        const { comment, currentUser } = this.props;
        
        let deletePhoto;
        let editPhoto;

        if (currentUser.id = comment.user_id) {
            deletePhoto = (
                <button
                    className="comment-delete-button"
                    onClick={this.handleDelete}
                    type="button"
                >
                    <CgTrash />
                </button>
            )
            editPhoto = (
                <button
                    className="comment-edit-button"
                    onClick={this.handleEdit}
                    type="button"
                >
                    <BiEdit />
                </button>
            )
        } else {
            deletePhoto = null;
            editPhoto = null;
        }
        
        return (
            <div className="comment">
                <div className="comment-content">
                    <Link to={`/photos/${comment.user_id}`} className="comment-user">{currentUser.fname}</Link>
                    <p className="comment-body">{comment.body}</p>
                </div>
                <div className="comment-actions">
                    {editPhoto}
                    {deletePhoto}
                </div>
            </div>
        )
    }
}

export default CommentsIndexItem;