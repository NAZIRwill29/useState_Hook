import React, { useState } from "react";

function App() {
  // Hook of useState to hook the value
  // []=[] - destructuring
  // setCount = function to update the value of count
  const [count, setCount] = useState(0);
  //console.log(count);

  function increase() {
    // update the value of count
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      {/* button that call the function when clicked */}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
