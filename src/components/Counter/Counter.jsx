import React, { useContext, useState } from "react";

import { useCount } from "../../context/Count";

const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <span>
        <h1> Count: {count}</h1>
      </span>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default Counter;
