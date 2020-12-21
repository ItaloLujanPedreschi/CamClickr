import React from 'react';
import CommentsIndexItemContainer from './comments_index_item_container';
import CommentFormContainer from './comment_form_container';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getComments();
    }

    render() {
        const { comments, photoId } = this.props;
        
        const photoComments = comments.filter(comment => {
            return parseInt(comment.photo_id) === photoId;
        });

        return (
            <div className="comments-container">
                <div className="comments-list">
                    {photoComments.map(comment => {
                        return <CommentsIndexItemContainer key={comment.id} comment={comment} />
                    })}
                </div>
                <CommentFormContainer photoId={photoId} />
            </div>
        )
    }
}

export default CommentsIndex;