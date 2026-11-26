import { useRef } from "react";

// const Reference = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <h2>UseRef</h2>
//       <input type="test" ref={inputRef} placeholder="Enter input" />
//       <button onClick={handleClick}>Focus</button>
//     </div>
//   );
// };

// export default Reference;

const Reference = () => {
  const countRef = useRef(0);
  const handleCount = () => {
    countRef.current++;
    console.log(countRef.current);
  };
  return (
    <div>
      <h2>Check Console</h2>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
};

export default Reference;
