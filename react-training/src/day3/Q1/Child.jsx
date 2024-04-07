import React,{useContext, useState} from 'react';
import { MyContext } from './Createcontext';

function Child() {
    const {status,setStatus}=useContext(MyContext);
    const [username,setUserName]=useState("");
    console.log(MyContext);
    const clickHandler=()=>{
        if(status==='not logged')
        {
            setStatus('logged in');
        }
    }
  return (
    <>
    <div>Login </div>
    <br />
    <input type="text" placeholder='Enter the username' value={username} onChange={(e)=>{setUserName(e.target.value)}}></input>
    <button onClick={clickHandler} >Login</button>
    <br />
    <span>{status==='logged in'?`Welcome,${username}!`:"Please log in."}</span>
    
    </>
  )
}

export default Child;