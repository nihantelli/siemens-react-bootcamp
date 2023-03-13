import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  console.log('Counter re-render');

  return (
    <div className='card'>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Counter;