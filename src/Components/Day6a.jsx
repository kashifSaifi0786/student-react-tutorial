import { useState } from "react";

function Name(){
    const [name , setName]= useState("Priya");
    return(
        <div>
            <h2>Name: {name}</h2>
            <button onClick={()=> setName("Minki")}>Change Name</button>
        </div>
    );
}

export default Name;