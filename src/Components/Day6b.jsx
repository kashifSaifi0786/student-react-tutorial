function Event(){
    function handleClick(){
        alert("Button Clicked!");
    }

    function handleMessage(){
        alert("Welcome to React!");
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleMessage}>Show Message</button>
        </div>
    );
}

export default Event;