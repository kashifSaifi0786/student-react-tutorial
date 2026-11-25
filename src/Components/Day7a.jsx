import { useState } from "react";

const Array =()=>{

    const[names,setNames]=useState(["Harshita","Priyanka"]);

    const handleAdd=()=>{
        setNames([...names,"Manshi"]);
    }

    return(

         <div className="container">
        <h2>Student List </h2>
       
        <button onClick={handleAdd}>Add Name </button>
       
        {
            names.map((name,index)=>(<p key={index}>{name}</p>))
        }
    

        </div>
    );
};

export default Array;