import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../components/User'
import * as userActions from '../store/action/user';


const Users = () => {
  const users = useSelector((state) => {
    return state.users
  })
  console.log(users);

  const dispatch = useDispatch();

  const removeUsers = () => {
    dispatch(userActions.removeUsers());
  };

  return (
    <div>
      {users.lenght !== 0 ? (
        users.map((user) => {
          return (
            <User name={user.name} id={user.id} password={user.password} />  //getting objects & access via key names  
          );
        })
      ) : (
        <h2>No user found </h2>
      )}
     {users.lenght !== 0 && <button onClick={removeUsers}>Clear List</button> }
    </div>
  );
};

export default Users;

//useSelector - call back function using to get values from store .