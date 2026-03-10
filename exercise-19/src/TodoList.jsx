import React from 'react'
import { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';



function TodoList() {
  const { state } = useContext(TodoContext);
  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {state.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList