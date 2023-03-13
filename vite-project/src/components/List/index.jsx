import React from 'react';
import Item from './Item';

function List({ todos, setTodos }) {
  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'>Mark all as complete</label>

      <ul className='todo-list'>
        {todos?.map((todo) => (
          <Item todo={todo} key={todo.id} setTodos={setTodos} />
        ))}
      </ul>
    </section>
  );
}

export default List;