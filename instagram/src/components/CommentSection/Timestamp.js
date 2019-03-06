import React from 'react';
import './CommentSection.css';

import moment from 'moment';
import PropTypes from 'prop-types';

const Timestamp = props => {
    return (
        <p className="timestamp">
            {moment(props.timestamp, 'MMMM Do YYYY hh:mm:ss a').fromNow()}
        </p>
    );
}

Timestamp.propTypes = {
    timestamp: PropTypes.string.isRequired
}

export default Timestamp;