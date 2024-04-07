
import React from 'react';
import {Link,Outlet} from 'react-router-dom';

function Dashboard() {
  return (
    <>
    <div>Dashboard</div>
    <Link to="/dashboard/setting">Setting</Link>
    <br />
    <Link to="/dashboard/profile">Profile</Link>

    <Outlet />
    </>
  )
}

export default Dashboard
