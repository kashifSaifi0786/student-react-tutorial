
const FilterArray=()=>{

    const names=["Harshita","Priyanka","Nikk","Nikita"];

    const filteredNames=names.filter((name)=> {return name.startsWith("N")});


    return(
        <>

        <h2>Filtered Names</h2>
        {filteredNames.map((name,index)=>(
            <p key={index}>{name}</p>
        ))}
        </>
    );


}

export default FilterArray;

