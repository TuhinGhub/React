import React from 'react';
import { useNavigate } from 'react-router-dom';


function About() {
    const navigate=useNavigate();

  return (
    <>
     <div>About Page</div>
    <button onClick={()=>{navigate('/')}}>Go to Home Page</button>
    <br />
    <br />
    <button onClick={()=>{navigate('/dashboard')}}>Dashboard</button>



    </>
   
  )
}

export default About