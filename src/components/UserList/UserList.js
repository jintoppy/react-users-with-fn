import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';

const UserList = ({ list, onSelectUser }) => {
   
    const userList = list.map((item) => {
        return (
            <div className="user-list-item" key={item.login}>
                <h3>{item.login}</h3>
                <p>
                    <img src={item.avatar_url} width="200" height="200" />
                </p>                
                <button onClick={() => onSelectUser(item.login) }>View Details</button>
            </div>
        );
    });

    return (
        <div className="user-list">
            {userList}
        </div>
    )
};


const UserPropType = PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string
});

UserList.propTypes = {
    list: PropTypes.arrayOf(UserPropType).isRequired,
    onSelectUser: PropTypes.func
};

export default UserList;