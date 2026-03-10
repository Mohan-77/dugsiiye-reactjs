import React, { useContext } from 'react';
import TodoContext from './TodoContext';

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
      >
        {todo.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
}