import React, { Component } from 'react';
import './App.css';

import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Instagram</h1>
        </header>
      </div>
    );
  }
}

export default App;
