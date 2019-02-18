import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import dummyData from './dummy-data.js';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => <PostContainer post={post}/>)}
      </div>
    );
  }
}

// FontAwesome stuff
library.add(faCompass);
library.add(faHeart);
library.add(faUserCircle);

export default App;
