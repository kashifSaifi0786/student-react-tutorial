import React from "react";

const Events = () => {

    const handleHello = () => {
        alert("Hello Harshita!");
    };


    const handleName = () => {
        console.log("Sita");
    };


    const handleAge = () => {
        console.log(21);
    };

    const handleColor = (color) => {
        console.log(color);
    };

   
    const handleGoodbye = () => {
        alert("Goodbye!");
    };

    return (
        <div>
            <h2>React Events Practice</h2>

            <button onClick={handleHello}>
                Hello
            </button>

            <br></br>

            <button onClick={handleName}>
                Show Name
            </button>

            <br></br>

            <button onClick={handleAge}>
                Show Age
            </button>

            
            <br></br>

            <button onClick={() => handleColor("Red")}>
                Red
            </button>

            
            <br></br>


            <button onClick={() => handleColor("Green")}>
                Green
            </button>

            
            <br></br>

            <button onClick={() => handleColor("Blue")}>
                Blue
            </button>

            
            <br></br>

            <button onClick={handleGoodbye}>
                Goodbye
            </button>

            
            <br></br>

        </div>
    );
};

export default Events;
