import React from 'react';
import TagFormContainer from './tag_form_container';

class TagsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTags();
    }

    render() {
        const { tags, currentUser, photoId } = this.props;

        const photoTags = tags.filter(tag => {
            return parseInt(tag.photo_id) === photoId;
        });
        // debugger;
        return (
            <div className="tags-container">
                <div className="tags-controls">
                    <p>Tags</p>
                    <button>
                        Add tags
                    </button>
                </div>
                {photoTags.map(tag => {
                    return (
                        <p className="tag">{tag.name}</p>
                    )
                })}
                <TagFormContainer photoId={photoId}/>
            </div>
        )
    }
}

export default TagsIndex;