import React from 'react';
import PropTypes from 'prop-types';
import './UserDetail.css';

const UserDetail = ({selectedUser}) => {
    return (
        <div className="user-details">
            <h3>User Details</h3>
            <h2>{selectedUser}</h2>
        </div>
    )
};

UserDetail.propTypes = {
    selectedUser: PropTypes.string
};

export default UserDetail;