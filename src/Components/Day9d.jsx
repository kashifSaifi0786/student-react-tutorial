import { useState } from "react";

const FilterSearch=()=>{

    const[search,setSearch]=useState("");

    const students = [

        { id: 1, name: "Harshita", course: "React", age: 22, skills: ["HTML", "CSS", "JavaScript"] },
        { id: 2, name: "Priyanka", course: "Java", age: 23, skills: ["Java", "SQL"] },
        { id: 3, name: "Nikk", course: "React", age: 21, skills: ["HTML", "React"] },
        { id: 4, name: "Nikita", course: "Python", age: 20, skills: ["Python", "SQL"] }

    ];


    const searchStudents=students.filter((student)=>

        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.course.toLowerCase().includes(search.toLowerCase()) ||
        student.age.toString().includes(search)||
        student.skills.some((skill)=>
        skill.toLowerCase().includes(search.toLowerCase()))

    
    );


    return(
        <>
        <h2>Search Students</h2>
        <input
        type="text"
        placeholder="Search name, course, age or skills"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
        {searchStudents.map((student)=>(
        <div key={student.id}>
            <h3>{student.name}</h3>
            <p>Course:{student.course}</p>
            <p>Age:{student.age}</p>
            <p>Skills:{student.skills.join(",")}</p>

        </div>))}
        </>
    );
}

export default FilterSearch;