import { useState } from "react";

const UpdateStudent=()=>{
    const[student,setStudent]=useState({
        name:"Harshita",
        age:21,
        course:"ReactJs"
    });
    
    const handleUpdate=()=>{
        setStudent({
            ...student,age:22
        });
    };


    return(
        <>
        <h2>Student Details</h2>
        <p>Name:{student.name}</p>
        <p>Age:{student.age}</p>
        <p>Course:{student.course}</p>

        <button onClick={handleUpdate}>Update</button>
        </>
    );


}

export default UpdateStudent;