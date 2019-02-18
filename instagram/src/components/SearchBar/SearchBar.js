import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CameraLogo from '../../assets/camera-logo.svg';
import IGLogo from '../../assets/iglogo.png';

const SearchBar = () => {
    return (
        <header className="search-bar">
            <img alt="camera logo" class="camera-logo" src={CameraLogo} />
            <img alt="Instagram Logo" class="instagram-logo" src={IGLogo} />

          <FontAwesomeIcon icon="compass" />
          <FontAwesomeIcon icon="heart" />
          <FontAwesomeIcon icon="user-circle" />
        </header>
    );
}

export default SearchBar;