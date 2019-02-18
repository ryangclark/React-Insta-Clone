import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
    return (
        <header className="search-bar">
          <h1>Instagram</h1>

          <FontAwesomeIcon icon="compass" />
          <FontAwesomeIcon icon="heart" />
          <FontAwesomeIcon icon="user-circle" />
        </header>
    );
}

export default SearchBar;