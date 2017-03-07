import React from 'react';
import CommentBlock from './components/CommentBlock';

class CommentListApp extends React.Component {

    constructor(props) {
        super(props);
        let comments = {};
        props.comments.forEach((comment) => comments[comment.id] = comment);
        this.state = { comments };
    }

    viewDetails(commentId) {
        alert(`De details: ${JSON.stringify(this.state.comments[commentId])}`);
    }

    componentDidMount() {
        var eventSource = new EventSource("/sse/updates");

        eventSource.onmessage = (e) => {
            const newComment = JSON.parse(e.data);
            const newComments = Object.assign({}, this.state.comments);
            newComments[newComment.id] = newComment;
            this.setState({ comments: newComments });
        };
    }

    render() {
        const commentNodes = Object.keys(this.state.comments)
            .map((commentId) => {
                    const comment = this.state.comments[commentId];
                    return (
                        <CommentBlock
                            author={ comment.author }
                            content={ comment.content }
                            commentId={ comment.id }
                            onClickViewDetails={this.viewDetails.bind(this)}
                            key={ comment.id }
                        />)
                }
            );

        return (
            <div className="comment-list">
                { commentNodes }
            </div>
        )
    }
}

CommentListApp.propTypes = {
    comments: React.PropTypes.array.isRequired
};

module.exports = CommentListApp;