import React, { useState } from "react";

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

export default Counter;
