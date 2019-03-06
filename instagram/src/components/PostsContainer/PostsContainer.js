import React from 'react';
import './Posts.css';

import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const PostsContainer = props => {
    return (
        <section className="posts-container">
            {props.postList.map(post => {
                return (
                    <article className="post" key={/m\/(\w+)/.exec(post.imageUrl)[1]}>
                        <PostHeader post={post} />
                        {/* TODO: amend `alt` below */}
                        <img alt="" className="post-image" src={post.imageUrl} />
                        <CommentSection
                            likes={post.likes}
                            timestamp={post.timestamp}
                            comments={post.comments}
                        />
                    </article>
                )
            })}
        </section>
    );
}

PostsContainer.propTypes = {
    postList: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
          })
        )
      })
    )
  };

export default PostsContainer;