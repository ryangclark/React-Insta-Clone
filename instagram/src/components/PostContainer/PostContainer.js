import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="user-thumb-and-name">
                <img alt="user's profile" className="thumbnail" src={props.post.thumbnailUrl} />
                <h6 className="username">{props.post.username}</h6>
            </div>
            {/* TODO: amend `alt` below */}
            <img alt="" className="post-image" src={props.post.imageUrl} />
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default PostContainer;