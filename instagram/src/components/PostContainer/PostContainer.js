import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = () => {
    return (
        <div className="post-container">
            PostContainer
            <CommentSection />
        </div>
    );
}

export default PostContainer;