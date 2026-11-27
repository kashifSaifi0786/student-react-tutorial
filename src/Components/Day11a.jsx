import { useState } from "react";

const ControlledForm = () => {

    const [name, setName] = useState("");

    const [student, setStudent] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            name.trim() === ""
        ) {
            return;
        }

        setStudent({
            id: Date.now(),
            name: name,
           
        });

        setName("");
       
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <h2>Student Form</h2>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                
                <button type="submit">SUBMIT</button>

            </form>

            {student && (
                <div>
                    <h3>Submitted Student Details</h3>

                    <p>Name: {student.name}</p>
                  
                </div>
            )}

        </div>
    );
};

export default ControlledForm;