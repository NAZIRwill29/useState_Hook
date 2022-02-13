import React, { useState } from "react";

function App() {
  // Hook of useState to hook the value
  // []=[] - destructuring
  const [count, setCount] = useState(1);
  //console.log(count);

  function increase() {
    setCount(12);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
