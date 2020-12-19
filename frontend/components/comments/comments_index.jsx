import React from 'react';
import CommentsIndexItemContainer from './comments_index_item_container';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getComments();
    }

    render() {
        const { comments, currentUser } = this.props;

        const photoComments = comments.filter(comment => {
            return parseInt(comment.user_id) === currentUser.id;
        });

        return (
            <div className="comments-list">
                {comments.map(comment => {
                    return <CommentsIndexItemContainer key={comment.id} comment={comment} />
                })}
            </div>
        )
    }
}

export default CommentsIndex;