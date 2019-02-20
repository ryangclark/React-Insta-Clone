import React from 'react';
import './CommentSection.css';

import PropTypes from 'prop-types';

const Timestamp = props => {
    return (
        <p className="timestamp">{props.timestamp}</p>
    );
}

Timestamp.propTypes = {
    timestamp: PropTypes.string.isRequired
}

export default Timestamp;