import React,{ useState } from 'react'
import Child from './Child'
import { MyContext } from './Createcontext'
function Parent() {
  const [status,setStatus]=useState('not logged');
  return (
    <>
    <MyContext.Provider value={{status,setStatus}}>
    <Child />
    </MyContext.Provider>
    
    </>

  )
}

export default Parent