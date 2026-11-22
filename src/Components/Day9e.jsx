import { useState } from "react";

const StudentList=()=>{

    const[loading,setLoading]=useState(true);
    const[students,setStudents]=useState([]);

    return(
    <>

    <h2>Student Management (Loading + Empty + Data State)</h2>

    {loading?(<h3>Loading...</h3>):students.length===0?(<h3>No students found</h3>):(
        <>
        <h3>Student List</h3>
        {students.map((student,index)=>
        <p key={index}>{student}</p>)}
        </>
    )}
   

    {!loading && students.length > 0 && (
    
        <p>Students loaded successfully!</p>

    )}


    <button onClick={() => setLoading(false)}>Stop Loading </button>

    <button onClick={() => setStudents(["Harshita", "Nikk", "Priyanka"])}>Add Students</button>

    <button onClick={() => setStudents([])}>Clear Students </button>

    <button onClick={() => setLoading(true)}>Start Loading</button>

     </>

    );



}


export default StudentList;