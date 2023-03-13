import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function Header({ setTodos }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { id: nanoid(), title, isCompleted: false }]);
  };

  return (
    <header className='header'>
      <form onSubmit={handleSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;