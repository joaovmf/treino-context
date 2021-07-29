import React from "react";

import { useCount } from "../../context/Count";

const Mirror = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <span>
        <h1>Mirror: {count}</h1>
      </span>
      <button onClick={() => setCount(count + 2)}>+2</button>
    </div>
  );
};

export default Mirror;
