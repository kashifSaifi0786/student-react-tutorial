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
        <h2>Status:{status}</h2>
        <button onClick={handleToogle}>{status}</button>

        {status === "ON" && <h1>Hello ReactJS</h1>}

        <p>Click the button to change ON/OFF.</p>

        </>
    );


}

export default Toggle;