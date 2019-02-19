import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.comments.map(comment => {
                return (
                    <div className="comment">
                    <p className="comment-username">{comment.username}</p>
                    <p className="comment-text">{comment.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default CommentSection;