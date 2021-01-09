import React from 'react';
import { Link } from 'react-router-dom';
import { VscClose } from 'react-icons/vsc';

class TagsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteTag(this.props.tag.id);
    }

    render() {
        const { tag, currentUser, photoOwnerId } = this.props;
        
        let deleteTag;

        if (currentUser.id == photoOwnerId) {
            deleteTag = (
                <button
                    className="comment-delete-button"
                    onClick={this.handleDelete}
                    type="button"
                >
                    <VscClose />
                </button>
            )
        } else {
            deleteTag = null;
        }
        
        return (
            <div className="tag-item">
                <div className="tag">
                    <Link to={`/photos/tag/${tag.name}`} className="tag-name">{tag.name}</Link>
                    {deleteTag}
                </div>
            </div>
        )
    }
}

export default TagsIndexItem;