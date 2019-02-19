import React from 'react';
import './Posts.css';

import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const PostsContainer = props => {
    return (
        <section className="posts-container">
            {props.postList.map((post, index) => {
                return (
                    <article className="post" key={/m\/(\w+)/.exec(post.imageUrl)[1]}>
                        <PostHeader post={post} />
                        {/* TODO: amend `alt` below */}
                        <img alt="" className="post-image" src={post.imageUrl} />
                        <CommentSection post={post} />
                    </article>
                )
            })}
        </section>
    );
}

PostsContainer.propTypes = {
    imageUrl: PropTypes.string
};

export default PostsContainer;