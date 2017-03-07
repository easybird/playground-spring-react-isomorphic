import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import CommentFormApp from './CommentFormApp';
import CommentListApp from './CommentListApp';
import CropperApp from './CropperApp';

// Functions for Browser side rendering!
if (typeof window !== 'undefined') {
    ReactDOM.render(
        <CommentFormApp onCommentSubmit={ (comment) => $.post('/', comment, null, 'json')} />,
        document.getElementById("navbar")
    );

    $.getJSON('/', function (data) {
        ReactDOM.render(
            <CommentListApp comments={ data } />,
            document.getElementById("comments"));
    });

    ReactDOM.render(
        <CropperApp test="browserSide!" />,
        document.getElementById("cropper"));

}

// Functions for Server side rendering!
function renderCommentList(comments) {
    return ReactDOMServer.renderToString(<CommentListApp comments={comments} />);
}

function renderCommentForm() {
    return ReactDOMServer.renderToString(<CommentFormApp />);
}

function renderCropper() {
    return ReactDOMServer.renderToString(<CropperApp test="serverSide!" />);
}

module.exports = {
    renderCommentList,
    renderCommentForm,
    renderCropper
};
