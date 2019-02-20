import React, { Component } from 'react';

import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  render() {
    return (
      <div className="posts-page">
        <SearchBar />
        <PostsContainer postList={this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;