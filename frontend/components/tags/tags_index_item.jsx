import React from 'react';
import { IoCloseOutline } from 'react-icons/io';

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
                    {/* <IoCloseOutline /> */}
                    <p>X</p>
                </button>
            )
        } else {
            deleteTag = null;
        }
        
        return (
            <div className="tag">
                <p className="tag-name">{tag.name}</p>
                {deleteTag}
            </div>
        )
    }
}

export default TagsIndexItem;