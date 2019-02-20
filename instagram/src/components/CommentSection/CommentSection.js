import React from 'react';
import './CommentSection.css';

import PropTypes from 'prop-types';

import Comment from './Comment';
import Timestamp from './Timestamp';

const CommentSection = props => {

    return (
        <div className="comment-section">
            {/* TODO: Fix these icons */}
            {/* TODO: Allow user to toggle like button */}
            <i className="far fa-heart" />
            {/* TODO: Have `like-count` reflect user's like input */}
            <p className="like-count">{props.likes} likes</p>
            {/* TODO: Allow adding comments */}
            {props.comments.map((comment, index) => {
                return (
                    <Comment 
                        comment={comment}
                        key={`${/\w+/.exec(comment.text)[0]}-${index}`}
                    />
                );
            })}
            <Timestamp timestamp={props.timestamp} />
        </div>
    );
}

CommentSection.propTypes = {
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
        })
    )
};

export default CommentSection;