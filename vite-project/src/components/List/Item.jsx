import React, { useState } from 'react';

function Item({ todo, setTodos }) {
  const handleToggle = () => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }

        return item;
      });
    });
  };

  const handleDelete = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
  };

  return (
    <li className={todo.isCompleted ? 'completed' : ''}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={todo.isCompleted}
          onChange={handleToggle}
        />
        <label>{todo.title}</label>
        <button className='destroy' onClick={handleDelete}></button>
      </div>
    </li>
  );
}

export default Item;