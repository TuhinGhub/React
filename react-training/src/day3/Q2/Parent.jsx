import React,{ useState } from 'react'
import Child from './Child'
import { MyContext } from './createContext'
import { MyContext2 } from './createContext2'
function Parent() {
  const [status,setStatus]=useState('not logged');
  const [preferences,setPreferences]=useState('');
  const Preferencesfunction=()=>{
    if(preferences==='light')
    {
      setPreferences('dark');
    }
    else{
      setPreferences('light');
    }
  }
  return (
    <>
    <MyContext.Provider value={{status,setStatus}}>
      <MyContext2.Provider value={{preferences,Preferencesfunction}}>
      <Child />
      </MyContext2.Provider>
    </MyContext.Provider>
    
    </>

  )
}

export default Parent