import { useState } from "react";

const ChildA=({count,setCount})=>{

    return(
        <button onClick={()=>setCount(count+1)}>Increase</button>
    );

}


const ChildB=({count})=>{
    return <h2>count={count}</h2>;
}

const StateLift=()=>{
    const[count,setCount]=useState(0);
    return(
        <>
        <ChildA count={count} setCount={setCount}/>
        <ChildB count={count}/>
        </>

    );
}

export default StateLift;



// Definition: Lifting state up means moving state from a child component to its closest common parent so multiple components can share the same state.