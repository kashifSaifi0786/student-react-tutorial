import { useState } from "react";

const Counter =()=>{

    const[count,setCount]=useState(0);

    const increase =()=>{
        setCount(count+1);
    }

    const decrease =()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    const reset = () => {
        setCount(0);
    };


    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={increase}> Increase(+1) </button>
        <button onClick={decrease}> Decrease(-1) </button>
        <button onClick={reset}> Reset(0) </button>

        </>
    );

}


export default Counter;



