import { useState } from "react";

// Toggle show/hide

function Toggle() {
  const [show, setShow] = useState(true);

// Input Display
const [name, setName] = useState("");

  return (
    <div>
         <h1>Toggle and Input</h1>
          <h2>1. Toggle </h2>

        <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"}Toggle</button>
        {show && <h2>Hello React!</h2>}

        <hr />

          <h2>2. Input Display </h2>
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
          <h2>Your Name: {name}</h2>
          <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

export default Toggle;