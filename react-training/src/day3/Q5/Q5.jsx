import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Error from './Error';
import Login from './Login';

import {Mycontext} from './CreateContext';
import PrivateComponent from './PrivateComponent';
import Dashboard from './Dashboard';
import Setting from './Setting';
import Profile from './Profile';

const Q5=()=> {

    const [auth,setauth]=useState(false);
    const [name,setName]=useState('');

  return (
    <>
    <Mycontext.Provider value={{auth,setauth,name,setName}}>
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateComponent />}>
        <Route path='/about' element={<About />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/setting' element={<Setting />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>

      </Route>
        <Route path='/' element={<Home  />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
    </Mycontext.Provider>
    
    </>
    
  )
}

export default Q5