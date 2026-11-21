import { Components } from "react";

// Static HTML UI 

{/* <div class="container">
    <h1>Student Profile</h1>

    <div class="card">
        <img src="student.jpg">
        <h2>Minki</h2>
        <p>Course: MBA</p>
        <p>City: Charkhi Dadri</p>
        <button>View Profile</button>
    </div>
</div> */}



// HTML into JSX

function Student(){
    return(
        <div className="container">
            <h1>Student Profile</h1>
            <div className="card">
                <img src="student.jpg" />
                <h2>Minki</h2>
                <p>Course: MBA</p>
                <p>City: Charkhi Dadri</p>
                <button>View Profile</button>
            </div>
        </div>
    );
}
export default Student;



