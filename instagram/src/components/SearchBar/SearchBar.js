import React from 'react';
import './SearchBar.css';

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
                <i className="far fa-compass" />
                <i className="far fa-heart" />
                <i className="far fa-user-circle" />
            </div>
        </header>
    );
}

export default SearchBar;