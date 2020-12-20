import React from 'react';
import { Link } from 'react-router-dom';
import { CgTrash } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';

class TagsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteTag(this.props.tag.id);
    }

    render() {
        const { tag, currentUser } = this.props;
        
        let deletePhoto;

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
        } else {
            deletePhoto = null;
        }
        
        return (
            <div className="comment">
                <div className="comment-content">
                    <Link to={`/photos/${comment.user_id}`} className="comment-user">{currentUser.fname}</Link>
                    <p className="comment-body">{comment.body}</p>
                </div>
                <div className="comment-actions">
                    {deletePhoto}
                </div>
            </div>
        )
    }
}

export default TagsIndexItem;