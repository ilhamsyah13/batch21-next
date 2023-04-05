import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(5);
  return (
    <div>
      <h1>counter : {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
