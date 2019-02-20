import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data.js';

import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
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
      <div className="App">
        <SearchBar />
        <PostsContainer postList={this.state.posts} />
      </div>
    );
  }
}

export default App;
