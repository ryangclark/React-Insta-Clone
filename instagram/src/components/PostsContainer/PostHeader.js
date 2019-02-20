import React from 'react';
import './Posts.css';

import PropTypes from 'prop-types';

const PostHeader = props => {
    return (
        <header className="post-header">
            {/* TODO: These should both really be links */}
            <img alt="user's profile" className="thumbnail" src={props.post.thumbnailUrl} />
            <h6 className="username">{props.post.username}</h6>
        </header>
    );
}

PostHeader.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            username: PropTypes.string,
            test: PropTypes.string
          })
        )
      })
};

export default PostHeader;