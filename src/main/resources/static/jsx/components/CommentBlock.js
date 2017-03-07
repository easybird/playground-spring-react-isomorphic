import React from 'react';

const CommentBlock = ({ commentId, author, content, onClickViewDetails = () => console.log('on Click view Details not yet implemented') }) => (
    <div className="col-md-4">
        <h1>{ author }</h1>
        <p>{ content } </p>
        <p>
            <a
                className="btn btn-default"
                href="#"
                role="button"
                onClick={ (e) => {
                    e.preventDefault();
                    onClickViewDetails(commentId);
                } }>
                View details &raquo;
            </a>
        </p>
    </div>
);

CommentBlock.propTypes = {
    commentId: React.PropTypes.number.isRequired,
    author: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    onClickViewDetails: React.PropTypes.func
};

export default CommentBlock;