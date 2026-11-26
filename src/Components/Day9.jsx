
// function Fruit() {

//     const fruits = ["Apple", "Mango", "Grapes"];

//     return (
//         <div>
//             <h1>Fruit List</h1>

//             {fruits.map((fruit, index) => (
//                 <h2 key={index}>{fruit}</h2>
//             ))}
//         </div>
//     );
// }

// export default Fruit;

function Student() {

    const students = [
        { id: 1, name: "Priya", age: 20 },
        { id: 2, name: "Minki", age: 21 },
        { id: 3, name: "Rahul", age: 22 }
    ];

    return (
        <div>
            <h1>Student List</h1>

            {students.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Age: {student.age}</p>
                </div>
            ))}
        </div>
    );
}

export default Student;
