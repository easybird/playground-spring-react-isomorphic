import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        var author = this.refs.author.value.trim();
        var content = this.refs.content.value.trim();

        // validate
        if (!content || !author) {
            return false;
        }

        this.props.onCommentSubmit({ author, content });
        this.refs.author.value = "";
        this.refs.content.value = "";
    };


    render() {
        return (
            <form ref="form" className="navbar-form navbar-right" method="POST" action="/save"
                  onSubmit={ ::this.handleSubmit }>
                <div className="form-group">
                    <input type="text" name="author" ref="author" placeholder="Your name" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" name="content" ref="content" placeholder="Say something..."
                           className="form-control " />
                </div>
                <button type="submit" className="btn btn-success">Post comment</button>
            </form>
        )
    }
}

CommentForm.propTypes = {
    onCommentSubmit: React.PropTypes.func
};

module.exports = CommentForm;