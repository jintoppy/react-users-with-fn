import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddUser.css';


const AddUser = ({addUser}) =>  {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onAddUser = (e) => {
        e.preventDefault();

        const newUser = {
            login: name,
            avatar_url: description
        };
        addUser(newUser);
    };

    const updateName = (e) => {
        setName(e.target.value)
    };

    return (
        <div>
            <h3>Add user</h3>
            <form onSubmit={onAddUser}>
                <div>
                    Name:
                    <input value={name} onChange={updateName} />
                </div>

                <div>
                    Description:
                    <textarea value={description} onChange={e => setDescription(e.target.value)} rows="10" cols="50" />
                </div>
                <div>
                    <input type="submit" value="Add User"  />
                </div>
            </form>
        </div>
    )
};

AddUser.propTypes = {
    addUser: PropTypes.func
};

export default AddUser;