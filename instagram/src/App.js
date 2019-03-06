import React, { Component } from 'react';
import './App.css';

import authenticate from './authentication/authenticate';
import Login from './components/Login/Login';
import PostsPage from './components/PostsContainer/PostsPage';

class App extends Component {
  // constructor(props) {
    // super(props);
  // }

  render() {
    return (
      <div className="App">
        <PostsPage revokeAuthentication={this.props.revokeAuthentication} />
      </div>
    );
  }
}

export default authenticate(App)(Login);
