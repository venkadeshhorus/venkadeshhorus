import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../store/action/user';

const Home = () => {

  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
  });

  const inputHandler = (event) => {
    const {name, value} = event.target;//destuctring like event.target.name &event.target.value insted of 
    console.log(name, value);
    setUser((prevItems) => { //state previous data 
      return {
        ...prevItems, //return previous state object 
        [name]: value, //updated state [using [] to take inside the name(id,name,password) key besics as paticular name value to taken [] ]
      };
    })
  };

  const dispatch = useDispatch();

  const addUser = () =>{
    dispatch(userActions.addUser(user));
   
    setUser({  //empty for entered values after empty only will enter again new values //initial value as empty
    id: "",
    name: "",
    password: "",
    })
  }


  return (
    <div>
      <h1> Add user</h1>
      <input name="id"
        placeholder='Enter the Id'
        onChange={inputHandler}
        value={user.id}
      />
      <input
        name="name"
        placeholder='Enter the User Name'
        onChange={inputHandler}
        value={user.name}
      />
      <input
        name="password"
        type="password"
        placeholder='Enter the Password'
        onChange={inputHandler}
        value={user.password}
      />
      <button type='submit' onClick={addUser}> Add user</button> 
      <Link to="/users"> Users List </Link>
    </div>
  )
}

export default Home