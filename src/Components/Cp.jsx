import { useState } from "react";


const Parent= () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Parent Count: {count}</h2>

            <Child onIncrease={increase} />
        </div>
    );
}

const Child=({ onIncrease })=> {
    return (
        <button onClick={onIncrease()}>
            Increase
        </button>
    );
}



export default Parent;