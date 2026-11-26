import { useState } from "react";
import "../Styles/Day11b.css"

const initialForm =
{
  name: "",
  age: "",
  email: "",
  course: "",
  otherCourse: "",
  gender: "",
  description: ""
    
};

const StudentForm=()=>{

    const[data,setData]=useState(initialForm);
    const[students,setStudents]=useState([]);
    const[editIndex,setEditIndex]=useState(null);


    const handleChange=(e)=>{

        const{name,value}=e.target;

        setData({
            ...data,[name]:value
        })
    }

    const handleAdd=()=>{
        setStudents([...students,data]);
    }


    const handleSubmit=(e)=>{

        e.preventDefault();

        if(editIndex===null){
            handleAdd();
        }else{
            handleUpdate();
        }

        setData(initialForm);

    }



    const handleUpdate=()=>{

        const updateStudents=[...students]
        updateStudents[editIndex]= data
        setStudents(updateStudents)
        setEditIndex(null);
    }


    const handleEdit=(index)=>{

        setData(students[index]);

        setEditIndex(index);

    }


    const handleReset = () => {

        setData(initialForm);
        setEditIndex(null);
  };

  const handleDelete = (index) => {
    setStudents(
      students.filter((student, i) => i !== index)
    );
  };



    return(
        <div>
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label>Full Name: </label>
                <input
                type="text"
                value={data.name}
                placeholder="Enter your Name"
                name="name"
                onChange={handleChange}/>
            </div>



            <div className="form-group">
                <label>Age: </label>
                <input
                type="number"
                value={data.age}
                placeholder="Enter your  age"
                name="age"
                onChange={handleChange}/>
            </div>



            <div className="form-group">
                <label>Email: </label>
                <input
                type="email"
                value={data.email}
                placeholder="Enter your Email"
                name="email"
                onChange={handleChange}/>
            </div>


            <div className="form-group">
                <label>Course: </label>
             
                <select
                value={data.course}
                name="course"
                onChange={handleChange}>


                    <option value=""> Select your Course Name </option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="Other">Other</option>
                    
                </select>
            </div>

            {data.course==="Other"&&
            <div className="form-group">

                  <label>Other Course</label>

                  <input
                  type="text"
                  name="otherCourse"
                  placeholder="Enter course name"
                  value={data.otherCourse}
                  onChange={handleChange}
                  />

            </div>}




            <div className="form-group">
                <label>Gender:</label>
                <div className="options">
                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={data.gender==="Male"}
                    onChange={handleChange}/>
                    Male
                </label>


                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={data.gender==="Female"}
                    onChange={handleChange}/>
                    Female
                </label>

                </div>
            
            </div>


        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            placeholder="Enter description"
            value={data.description}
            onChange={handleChange}
            maxLength={50}
          />

          <p className="count">
            {data.description.length}/50 Characters
          </p>

          {data.description.length === 50 && (
            <p className="warning">
              Maximum character limit reached!
            </p>
          )}
        </div>


                <div className="buttons">

          <button type="submit" className="submit-btn">
            {editIndex === null ? "Add Student" : "Update Student"}
          </button>

          <button
            type="button"
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

      </form>



           <h2>Student List</h2>
<table className="student-table">

  <thead>
    <tr>
      <th>S.No.</th>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Course</th>
      <th>Gender</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    {students.map((student, index) => (

      <tr key={index}>

        <td>{index + 1}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.email}</td>

        <td>
          {student.course === "Other"
            ? student.otherCourse
            : student.course}
        </td>

        <td>{student.gender}</td>
        <td>{student.description}</td>

        <td>
          <button
            className="edit-btn"
            onClick={() => handleEdit(index)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </td>

      </tr>

    ))}
  </tbody>

</table>








        </div>
    );


}


export default StudentForm;