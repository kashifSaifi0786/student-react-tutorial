const RenderList=()=>{

    const fruits=["Apple","Mango","Orange"];

    return(
        <div>
            <h2>Fruits Name</h2>
            <ul>
            {fruits.map((fruit,index)=>(

                <li key={index}>{fruit}</li>

            ))}

            </ul>
        </div>
    );
}

export default RenderList;