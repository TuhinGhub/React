
import React from 'react';
import { Link } from 'react-router-dom';

function Setting() {
  return (
    <>
    <div>Hello! I am Setting</div>
    <Link to="/dashboard">Dashboard</Link>
    <br />
    <Link to="/dashboard/profile">Profile</Link>

    </>
  )
}

export default Setting
