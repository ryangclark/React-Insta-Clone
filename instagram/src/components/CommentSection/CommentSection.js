import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            {/* TODO: Fix these icons */}
            {/* TODO: Allow user to toggle like button */}
            <i className="far fa-heart" />
            {/* TODO: Have `like-count` reflect user's like input */}
            <p className="like-count">{props.post.likes} likes</p>
            {/* TODO: Refactor comment to its own component */}
            {/* TODO: Add comments */}
            {props.post.comments.map((comment, index) => {
                return (
                    <div className="comment" key={`${/\w+/.exec(comment.text)[0]}-${index}`}>
                    <p className="comment-username">{comment.username}</p>
                    <p className="comment-text">{comment.text}</p>
                    </div>
                );
            })}
            {/* TODO: Make the timestamp say what it needs to */}
            <p className="time-posted">{props.post.timestamp}</p>
        </div>
    );
}

export default CommentSection;