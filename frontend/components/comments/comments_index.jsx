import React from 'react';

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
                    return (
                        <div className="comment">
                            <p>{comment.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CommentsIndex;