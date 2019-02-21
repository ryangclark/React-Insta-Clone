import React from 'react';
import './SearchBar.css';

import { CameraLogo } from '../StyledComponents/CameraLogo';
import { FontAwesomeIcon } from '../StyledComponents/FontAwesomeIcon';
import { InstagramLogo } from '../StyledComponents/InstagramLogo';
import { SearchHeader } from '../StyledComponents/SearchHeader';

const SearchBar = props => {
    console.log(props.revokeAuthentication);
    return (
        <SearchHeader>
            <div className="logo-wrapper">
                <CameraLogo />
                {/* <img alt="camera logo" className="camera-logo" src={CameraLogo} /> */}
                <InstagramLogo />
                {/* <img alt="Instagram Logo" className="instagram-logo" src={IGLogo} /> */}
            </div>
            <div> {/* className="search-bar-wrapper" */}
                {/* TODO: Search input should filter results */}
                <input placeholder="Search" /> {/* className="search-input" */}
            </div>

            <nav> {/* className="icon-wrapper" */}
                <FontAwesomeIcon className="far fa-compass" />
                <FontAwesomeIcon className="far fa-heart" />
                <FontAwesomeIcon className="far fa-user-circle" />
                {/* <i className="far fa-compass" /> */}
                {/* <i className="far fa-heart" /> */}
                {/* <i className="far fa-user-circle" onClick={props.revokeAuthentication} /> */}
            </nav>
        </SearchHeader>
    );
}

export default SearchBar;