import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from './CreateContext';

function Login() {
    const [password,setPassword]=useState();
    const {auth,setauth,name,setName}=useContext(Mycontext);
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        if(name==='xyz' && password==='getout123')
        {
            setauth(true);
        }
        else{
            alert("Invalid Username and Password");
            setauth(false);
        }
        auth?navigate('/about'):navigate('/login');
    }
  return (
    <>
    <div>Login</div>
    <form onSubmit={submitHandler} >
        <input type="text" value={name} placeholder='Enter the name' onChange={(e)=>{setName(e.target.value)}}></input>
        <br />
        <br />
        <input type="password" value={password} placeholder='Enter the password' onChange={(e)=>{setPassword(e.target.value)}}></input>
        <br/>
        <br />
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Login