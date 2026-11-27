import { useState } from "react";

const Character=()=>{

    const[character,setCharacter]=useState("");

    
    const handleInput=(e)=>{
        setCharacter(e.target.value);

    }

    return(
        <div>
            <input
            type="text"
            value={character}
            maxLength={50}
            placeholder="Enter Characters"
            pattern="a-z"
            onChange={handleInput}/>

            <p>Count:{character.length}</p>
            
            <p>Character:{character}</p>


            {character.length=== 50 &&<p>Character limit attained</p>}



        </div>
    );
}
export default Character;