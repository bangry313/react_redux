import React from 'react';

const Counter = ({ number, handleIncrease, handleDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
      </div>
    </div>
  );
};
export default Counter ;


