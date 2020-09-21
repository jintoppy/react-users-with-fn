import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import AddUser from './components/AddUser/AddUser';
import './App.css';

const App = () => {
  const [ selectedUser, setSelectedUser ] = useState(null);
  const [ users, setUsers ] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const getUsers = async () => {
    try{
      const response = await axios.get('https://api.github.com/users');
      setUsers(response.data);
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <>
      <Header />
      <AddUser addUser={addUser} />
      <UserList list={users} onSelectUser={setSelectedUser} />
      <UserDetail selectedUser={selectedUser} />
    </>
  );

};

export default App;
