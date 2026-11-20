import { useState } from "react";

const Delete =()=>{

    const[names,setNames]=useState(["Harshita","Priyanka","Manshi"]);

    const handleDelete=(index)=>{
        setNames(
            names.filter((name,i)=>i!==index)
        );
    }


     return (
        <>

        <h2>Student List</h2>
        {names.map((name, index) => (

            <div key={index}>
                <span>{name}</span>
                <button onClick={() => handleDelete(index)}>
                    Delete
                    </button>
                </div>
            ))}
        </>
    );
};



export default Delete;