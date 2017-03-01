import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import Cropper from './cropper';

if (typeof window !== 'undefined') {
    ReactDOM.render(
        <CommentForm onCommentSubmit={ function (comment) {
            $.post('/', comment, null, 'json');
        } } />,
        document.getElementById("navbar")
    );

    ReactDOM.render(<Cropper test="anotherTest" />, document.getElementById("cropper"));

    $.getJSON('/', function (data) {
        ReactDOM.render(<CommentList comments={ data } />, document.getElementById("comments"));
    });
}

function renderCommentList(comments) {
    return ReactDOMServer.renderToString(React.createElement(CommentList, { comments: comments }));
}

function renderCommentForm() {
    return ReactDOMServer.renderToString(React.createElement(CommentForm));
}

function renderCropper() {
    return ReactDOMServer.renderToString(React.createElement(Cropper, { test: "anotherTest" }));
}

module.exports = {
    renderCommentList,
    renderCommentForm,
    renderCropper
};
