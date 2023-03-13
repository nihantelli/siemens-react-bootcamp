import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

let filtered;
function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [todos, setTodos] = useState([
    { id: '1', title: 'Learn JavaScript', isCompleted: true },
    { id: '2', title: 'Learn React', isCompleted: false },
    { id: '3', title: 'Test', isCompleted: false },
  ]);

  filtered = todos;

  if (activeFilter !== 'all') {
    filtered = todos.filter((item) =>
      activeFilter === 'active' ? !item.isCompleted : item.isCompleted
    );
  }

  return (
    <>
      <section className='todoapp'>
        <Header setTodos={setTodos} />
        <List todos={filtered} setTodos={setTodos} />
        <Filter
          todos={todos}
          setTodos={setTodos}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </section>
      <Footer />
    </>
  );
}

export default App;