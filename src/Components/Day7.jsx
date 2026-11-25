import React, { useState } from "react";

function Fruits(){
    const [fruits , setFruits] = useState(["Apple" , "Mango" , "Grapes"]);

    const [newFruit , setNewFruits] = useState("");


    // Add Fruit 

    function addFruit(){
        if(newFruit.trim()==="") return;

        setFruits([...fruits,newFruit]);
        setNewFruits("");
    }

// Delete Fruit 

function deleteFruit(index){
    const updatedFruits= fruits.filter((fruit , i )=> i !== index);

    setFruits(updatedFruits);
}

return(
    <div>
        <h2>Fruits List</h2>
        <input type="text" value={newFruit} onChange={(e)=> setNewFruits(e.target.value)} placeholder="Enter Fruit Name"  />

        <button onClick={addFruit}>Add Fruit</button>
        {fruits.map((fruit , index )=>(
            <div key={index}>
                {fruit}
                <button onClick={()=> deleteFruit(index)}>Delete</button>
            </div>
        ))}
    </div>
);
}

export default Fruits;