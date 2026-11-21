import { useState } from "react";


const CRUD =()=>{

const[name,setName]=useState("")
const[students,setStudents]=useState([])
const[editIndex,setEditIndex]=useState(null)

const handleSubmit=()=>{
    if(name.trim===""){
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

    const updatedStudents = students.filter((student,i) => i !== index);
    setStudents(updatedStudents);
}



return (

    <div>
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
                <div key={index}>
                    <span>{student}</span>

                    <button onClick={() => handleEdit(index)}> Edit</button>

                    <button onClick={() => handleDelete(index)}>Delete</button>

                </div>
            ))}
        </div>
    );

}



export default CRUD;