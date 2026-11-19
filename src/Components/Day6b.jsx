import { use, useState } from "react";

const InputDisplay=()=>{

    const[name,setName]=useState("");

    const handleInput=(e)=>{
        setName(e.target.value);
       
    }


    return(
        <>
        <h2>Input Display</h2>

        <input
        type="text"
        value={name}
        placeholder="Enter your Name"
        onChange={handleInput}
        />


        <h3>Your Name: {name|| "Nothing entered yet"}</h3>

    
        </>
    );
}

export default InputDisplay;