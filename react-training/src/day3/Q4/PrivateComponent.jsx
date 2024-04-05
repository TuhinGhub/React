import React,{useContext} from 'react';
import {Navigate,Outlet} from 'react-router-dom'
import { Mycontext } from './createContext';

const PrivateComponent=()=>{
    const {auth} =useContext(Mycontext);
   
  return (
    <>
    {auth?<Outlet />:<Navigate to='/login' />}
    </>
  )
}

export default PrivateComponent