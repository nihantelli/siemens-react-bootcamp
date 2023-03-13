import { memo } from 'react';

function AnotherComponent({ count }) {
  console.log('AnotherComponent re-render');

  const random_numbers = new Array(count)
    .fill()
    .map(() => Math.floor(Math.random() * 100));

  return (
    <div>
      AnotherComponent
      <div>{JSON.stringify(random_numbers, null, 2)}</div>
    </div>
  );
}

export default memo(AnotherComponent);