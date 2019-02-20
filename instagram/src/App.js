import React, { Component } from 'react';
import './App.css';

import PostsContainer from './components/PostsContainer/PostsPage';
import PostsPage from './components/PostsContainer/PostsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
