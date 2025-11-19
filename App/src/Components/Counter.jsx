import React, {useEffect, useState} from "react"; 

export default function Counter() { 
    const[c , setCount] = useState(0); 
    useEffect(()=>{
        setTimeout(()=>{
            setCount((c)=> c + 1)
        },1000);
    });
    return ( 
    <div> 
        <h1>You clicked {c} times</h1>
        <button onClick={() => setCount(0)}>Reset</button> 
        </div> 
        ) 
    }