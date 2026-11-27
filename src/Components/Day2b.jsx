{/* <div class="profile">
    <h1>Student Details</h1>
    <h2>Harshita</h2>
    <p>Age: 21</p>
    <p>Course: React JS</p>
    <button onclick="showDetails()">Show Details</button>
</div> */}



const Task2 =()=> {

    const name = "Harshita";

    const showDetails=()=> {
        alert(`Student Name: ${name} Age: 21
Course: React JS`);
    }

    return (
        <div className="profile">

            <h1>Student Details</h1>

            <h2>{name}</h2>

            <p>Age: 21</p>

            <p>Course: React JS</p>

            <button onClick={showDetails}>
                Show Details
            </button>

        </div>
    );
}

export default Task2;
