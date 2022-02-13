import React, { useState } from "react";

function App() {
  // Hook of useState to hook the value
  const state = useState(1);
  console.log(state[0]);

  function increase() {
    //count++;
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
