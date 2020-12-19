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
        const { comments, currentUser, photoId } = this.props;

        const photoComments = comments.filter(comment => {
            return parseInt(comment.user_id) === currentUser.id;
        });

        return (
            <div className="comments-container">
                <div className="comments-list">
                    {comments.map(comment => {
                        return <CommentsIndexItemContainer key={comment.id} comment={comment} />
                    })}
                </div>
                <CommentFormContainer photoId={photoId} />
            </div>
        )
    }
}

export default CommentsIndex;