
import React,{useState} from 'react'
const  CounterWithStep = () => {
    const [count, setCount] = useState(0);
    const[step ,setStep]=useState(1);

    const incrementcount=()=>{
        setCount(previousCount=>previousCount+step)

    }
    const decrementcount=()=>{
        setCount(previousCount=>previousCount-step)
    }
   const handleStep=(event)=>{
    const newstep=parseInt(event.target.value);

     setStep(newstep);
   }
    return(
        <>
        <h2>Step Counter</h2>
        <p>Count:{count}</p> 
        <button onClick={incrementcount}>increment</button>
        <button onClick={decrementcount}>decrement</button>
        <input type="number" 
                value={step}
                onChange={(e) => handleStep(e)}
                placeholder='Enter Step Value'/>

        </>
    )

};

export default  CounterWithStep;