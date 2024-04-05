
import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

import {Mycontext} from './CreateContext';

function Profile() {
    const {name}=useContext(Mycontext);
  return (
    <>
    <div>Profile</div>
    <h1>Hello i am {name}</h1>
    <Link to="/dashboard">Dashboard</Link>

    </>
  )
}

export default Profile
