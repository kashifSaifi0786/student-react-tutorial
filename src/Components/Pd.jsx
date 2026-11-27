const Parent2=()=>{
    const name="Harshita"
    return(
        <div>
            <ChildA  name={name}/>
        </div>
    );
}

const ChildA=({name})=>{
    return(
        <>
        <ChildB name={name}/>
        </>
    );

}


const ChildB=({name})=>{
    return(
        <>
        <GrandChild name={name}/>
        </>
    );

}


const GrandChild=({name})=>{
    return(
        <>
      <h2>Hello {name}</h2>
        </>
    );

}

export default Parent2;

// Props Drilling: Passing data from a parent component through multiple intermediate components to reach a child component that needs it.

