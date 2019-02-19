import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

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

// FontAwesome stuff
library.add(faCompass, faHeart, faUserCircle);

export default App;
