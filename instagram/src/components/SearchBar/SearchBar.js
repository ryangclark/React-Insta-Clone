import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CameraLogo from '../../assets/camera-logo.svg';
import IGLogo from '../../assets/iglogo.png';

const SearchBar = () => {
    return (
        <header className="search-bar">
            <div className="logo-wrappers">
                <img alt="camera logo" class="camera-logo" src={CameraLogo} />
                <img alt="Instagram Logo" class="instagram-logo" src={IGLogo} />
            </div>
            <div className="search-bar-wrapper">
                <input className="search-bar" placeholder="Search" />
            </div>

            <div className="icon-wrapper">
                <FontAwesomeIcon icon="compass" />
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="user-circle" />
            </div>
        </header>
    );
}

export default SearchBar;