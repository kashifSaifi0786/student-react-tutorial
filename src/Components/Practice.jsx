import { useState } from "react";

const StudentManager=()=>{

    const[students,setStudents]=useState([
        {id:1,name:"Harshita",age:21,course:"ReactJs",city:"Noida"},
        {id:2,name:"Priyanka",age:23,course:"HTML",city:"Rohtak"},
        {id:3,name:"Minki",age:22,course:"Javascript",city:"Delhi"}
    ]);

    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[course,setCourse]=useState("")
    const[city,setCity]=useState("")
    const[editId,setEditId]=useState(null)
    const[search,setSearch]=useState("")
   
    const handleSubmit=(e)=>{

        e.preventDefault();


        if(
            name.trim()===""||
            age.trim()===""||
            course.trim()===""||
            city.trim()===""
        ){
            alert("Please fill all fields");
            return;
        }



        if(editId===null){
            const newStudent=({
                id:Date.now(),
                name:name,
                age:age,
                course:course,
                city:city,
            });

            setStudents([...students,newStudent]);

        }

        else{
            setStudents(students.map(student=>student.id===editId?{...student,name:name,age:age,course:course,city:city}:student));
        }

        handleReset();


    }

    
    
    const handleEdit = (student) => {

        setName(student.name);
        setAge(student.age);
        setCourse(student.course);
        setCity(student.city);

        setEditId(student.id);
    };


    const handleDelete=(id)=>{
        setStudents(students.filter(student=>student.id!==id));
        if(editId===id){
            handleReset();
        }
    }


    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );



    const handleReset = () => {

        setName("");
        setAge("");
        setCourse("");
        setCity("");

        setEditId(null);
    };


    return(
    <div>

        <h2>Student Management </h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />

            <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            />

            <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />

            <button type="submit"> {editId === null ? "Add Student" : "Update Student"} </button>

            <button type="button" onClick={handleReset}>Reset</button>

        </form>

        <hr />

        <h3>Total Students: {students.length}</h3>

        <input
        type="text"
        placeholder="Search student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />


         <h3>Student List</h3>


            {filteredStudents.length === 0 ? (
                <p>No students found</p>
            ) : (

                filteredStudents.map(student => (

                    <div key={student.id}>

                        <h4>{student.name}</h4>

                        <p>Age: {student.age}</p>
                        <p>Course: {student.course}</p>
                        <p>City: {student.city}</p>

                        <button onClick={() => handleEdit(student)}>
                            Edit
                        </button>

                        <button onClick={() => handleDelete(student.id)}>
                            Delete
                        </button>

                        <hr />

                    </div>

                ))
            )}
    

    </div>
    );
}


export default StudentManager;


