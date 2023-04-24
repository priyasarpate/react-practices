import React, { useState } from "react";

function Function() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  incrementFive = () => {

  }

  return (
    <div>
      count{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={incrementFive}>increament 5</button>

    </div>
  );
}

export default Function;
