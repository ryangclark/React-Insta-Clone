import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CameraLogo from '../../assets/camera-logo.svg';
import IGLogo from '../../assets/iglogo.png';

const SearchBar = () => {
    return (
        <header className="search-bar">
            <div className="logo-wrapper">
                <img alt="camera logo" className="camera-logo" src={CameraLogo} />
                <img alt="Instagram Logo" className="instagram-logo" src={IGLogo} />
            </div>
            <div className="search-bar-wrapper">
                {/* TODO: Search input should filter results */}
                <input className="search-input" placeholder="Search" />
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