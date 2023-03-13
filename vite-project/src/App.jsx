import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';
// import Counter from './components/Counter';
// import User from './components/User';
// import AnotherComponent from './components/AnotherComponent';

function App() {
  const [count, setCount] = useState(0);
  console.log('App re-render');

  const increment = useCallback((amount) => {
    setCount((count) => count + amount);
  }, []);

  return (
    <div className='App'>
      <Header increment={increment} />

      <hr />

      <button onClick={() => increment(1)}>count is {count}</button>

      {/* <Counter />
      <User /> */}
      {/* <AnotherComponent count={count < 5 ? count : 5} /> */}
    </div>
  );
}

export default App;