import { useState } from "react";

function StudentManager() {

    const [students, setStudents] = useState([
        { id: 1, name: "Priya" },
        { id: 2, name: "Minki" }
    ]);

    const [name, setName] = useState("");
    const [editId, setEditId] = useState(null);

    // Add Student
    function handleAdd() {

        if (name.trim() === "") return;

        const newStudent = {
            id: Date.now(),
            name: name
        };

        setStudents([...students, newStudent]);
        setName("");
    }

    // Update Student
    const handleUpdate = () => {

        if (name.trim() === "") return;

        setStudents(
            students.map((student) =>
                student.id === editId
                    ? { ...student, name: name }
                    : student
            )
        );

        setEditId(null);
        setName("");
    };

    // Edit Student
    const handleEdit = (student) => {

        setEditId(student.id);
        setName(student.name);

    };

    // Delete Student
    const handleDelete = (id) => {

        setStudents(
            students.filter((student) => student.id !== id)
        );

        if (editId === id) {
            setEditId(null);
            setName("");
        }
    };

    return (
        <div>
            <h2>Student List</h2>

            <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
            />

            {editId === null ? (
                <button onClick={handleAdd}>Add</button>
            ) : (
                <button onClick={handleUpdate}>Update</button>
            )}

            {students.map((student) => (
                <div key={student.id}>
                    <p>{student.name}</p>

                    <button onClick={() => handleEdit(student)}>
                        Edit
                    </button>

                    <button onClick={() => handleDelete(student.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default StudentManager;
