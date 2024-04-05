
import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from './createContext';

function Home(props) {
    const navigate=useNavigate();
    const {auth,name}=useContext(Mycontext);

  return (
    <>
{
  auth ? <h2>Welcome, {name}!</h2> : (
    <>
  <h2>Welcome! Please log in</h2>
  <button onClick={()=>navigate('/login')}>Go to Login</button>
  </>
)
}
    </>

  )
}

export default Home
