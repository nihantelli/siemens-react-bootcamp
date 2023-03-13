import React from 'react';

function Header({ increment }) {
  console.log('Header re-render');

  return (
    <div
      style={{
        padding: '20px 0',
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
      }}
    >
      <div>Header</div>
      <button onClick={() => increment(5)}>increment</button>
    </div>
  );
}

export default React.memo(Header);