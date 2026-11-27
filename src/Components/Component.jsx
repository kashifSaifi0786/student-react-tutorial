import { useState } from "react";
import "../Styles/Components.css";


const StudentList=({students,onMarkDone})=>{
    
    return(
        <div className="student-section">
            {students.map((student)=>(
                <div className="student-card" key={student.id}>
                   <span>{student.name}</span>
                    <div className="status-section">
                   <span>{student.status}</span>
                   {student.status==="pending"&&(<button onClick={()=>onMarkDone(student.id)}>
                   {student.status === "pending" ? "Mark Done" : "Mark Pending"} </button>)}
                </div>
                </div>
            ))}

        </div>
    );
}



const TwoComponents=()=>{

    const[name,setName]=useState("");

    const[students,setStudents]=useState([
        {id:1,name:"Harshita",status:"pending"},
        {id:2,name:"Manshi",status:"pending"}
    ]);

    const handleAdd=()=>{

        if(name.trim()===""){
            return;
        }

        const newStudent={
            id:Date.now(),
            name:name,
            status:"pending"
        }

        setStudents([...students,newStudent]);

        setName("");

    }

    const handleUpdate=(id)=>{
        setStudents(students.map((student)=>student.id===id?{...student,status: student.status === "pending" ? "done" : "pending"}:student));
    }

    return(
    <div className="main-container">
        <div className="input-section">
            <input
            type="text"
            value={name}
            placeholder="Enter your Name"
            onChange={(e)=>setName(e.target.value)}/>

            <button onClick={handleAdd}>ADD</button>
        </div>

        <StudentList students={students}
        onMarkDone={handleUpdate}/>

    </div>
    );

}


export default TwoComponents;

