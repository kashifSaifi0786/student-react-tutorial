import { useState } from "react";

function Student(){
    const [student , setStudent ] = useState({
        name: "Minki",
        age : 21 ,
        course : "React"
    });

    function updateName(){
        setStudent({...student , name : "Priya" });
    }

    function updateAge(){
        setStudent({...student , age : 22});
    }

    return(
        <div>
            <h1>Student Information</h1>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>

            <button onClick={(updateName)}>Update Name</button>
            <button onClick={(updateAge)}>Update Age</button>
        </div>
    )
}

export default Student;