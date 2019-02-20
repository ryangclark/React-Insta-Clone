import React, { Component } from 'react';
import './App.css';

import authenticate from './authentication/authenticate';
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

export default authenticate(App);
