import React from 'react';

function Filter({ todos, setTodos, activeFilter, setActiveFilter }) {
  const itemsLeft = todos.filter((item) => !item.isCompleted).length;

  const handleClear = () => {
    setTodos((prev) => prev.filter((item) => !item.isCompleted));
  };

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemsLeft} </strong>
        item{itemsLeft > 1 ? 's' : ''} left
      </span>

      <ul className='filters'>
        <li>
          <a
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => setActiveFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => setActiveFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => setActiveFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className='clear-completed' onClick={handleClear}>
        Clear completed
      </button>
    </footer>
  );
}

export default Filter;