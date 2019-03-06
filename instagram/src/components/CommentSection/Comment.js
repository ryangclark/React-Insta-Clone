import React from 'react';
import './CommentSection.css';

import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <p className="comment">
            <span className="username" href="#">{props.comment.username}</span>
              {/* Notice the two spaces here */}
            {props.comment.text}
        </p>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        test: PropTypes.string
        })
};

export default Comment;