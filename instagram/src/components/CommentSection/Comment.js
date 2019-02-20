import React from 'react';
import './CommentSection.css';

import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <p className="comment-username">{props.comment.username}</p>
            <p className="comment-text">{props.comment.text}</p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        test: PropTypes.string
        })
};

export default Comment;