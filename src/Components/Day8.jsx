import { useState } from "react";
import "../Styles/Day8.css";


const CRUD =()=>{

const[name,setName]=useState("")
const[students,setStudents]=useState([])
const[editIndex,setEditIndex]=useState(null)

const handleSubmit=()=>{
    if(name.trim()===""){
        return;
    }

    if(editIndex===null){
        setStudents([...students,name]);
    } else{

        const updateStudents=[...students];

        updateStudents[editIndex] = name;
        setStudents(updateStudents);
        setEditIndex(null);
    }

    setName("");
}


const handleEdit = (index) => {


    setName(students[index]);
    setEditIndex(index);

}

const handleDelete = (index) => {

    setStudents(students.filter((student,i) => i !== index));
}



return (

    <div className="container">
        <h2>Student Management</h2>

        <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleSubmit}>
                {editIndex === null ? "Add Student" : "Update Student"}
            </button>

            <h3>Student List</h3>

            {students.map((student, index) => (
                <div className="student-item" key={index}>
                    <span>{student}</span>

                    <button className="edit-btn" onClick={() => handleEdit(index)}> Edit</button>

                    <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>

                </div>
            ))}
        </div>
    );

}



export default CRUD;



