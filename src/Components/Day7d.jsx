import { useState } from "react";

const UpdateInputFields=()=>{

    const[student,setStudent]=useState({
        name:"",
        age: "" ,
        course:"",
        skills:""
    });

    const handleChange=(e)=>{

        const{name,value}=e.target;
        setStudent({
            ...student,[name]:value
        });
    }


    return(
        <div>
            <h2>Student Form </h2>

            <input
            name="name"
            type="text"
            placeholder="Enter your name "
            value={student.name}
            onChange={handleChange}/>


            <input
            name="age"
            type="number"
            placeholder="Enter your age "
            value={student.age}
            onChange={handleChange}/>


            <input
            name="course"
            type="text"
            placeholder="Enter your course details "
            value={student.course}
            onChange={handleChange}/>


            <input
            name="skills"
            type="text"
            placeholder="Enter your skills "
            value={student.skills}
            onChange={handleChange}/>


            <h3>Student Data</h3>

            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <p>Skills: {student.skills}</p>




        </div>
    );


}

export default UpdateInputFields;