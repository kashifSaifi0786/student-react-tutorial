import { useState } from "react";

const Toggle=()=>{

    const[status,setStatus]=useState("OFF");

    const handleToogle=()=>{
        if(status==="OFF"){
            setStatus("ON");
        }else{
            setStatus("OFF");
        }
    }


    return(
        <>
        <h1>Status:{status}</h1>
        <button onClick={handleToogle}>{status}</button>

        {status === "ON" && <h2>Hello ReactJS</h2>}

        <p>Click the button to change ON/OFF.</p>

        </>
    );


}

export default Toggle;

