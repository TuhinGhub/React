import React, {useState}  from 'react';
const PersonForm=()=>{
    const [firstname,setFirstname] = useState('');
    const [lastname, setLastname]= useState('');
    const [age, setAge] = useState('');

    return(
        <div>

            <input value={firstname} onChange={e => setFirstname(e.target.value)}/>
            <input value={lastname} onChange= { e => setLastname(e.target.value) } />
            <input value= {age} type='number' onChange={e=>setAge(e.target.value)}/>
           
           <p>Hello, {firstname} {lastname}. You are {age} years old.</p>
        
        
        </div>
        )

}
export default PersonForm;