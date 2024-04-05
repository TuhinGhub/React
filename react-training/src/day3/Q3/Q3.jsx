import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Error from './Error';


function Q3() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Q3