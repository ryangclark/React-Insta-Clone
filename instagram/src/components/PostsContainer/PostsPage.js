import React, { Component } from 'react';

import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor(props) {
    super(props);
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
        <SearchBar revokeAuthentication={this.props.revokeAuthentication} />
        <PostsContainer postList={this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;