import React, { useState, useContext } from 'react';
import TodoContext from './TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (!text.trim()) return;
    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), text, completed: false }
    });
    setText('');
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={text}
        placeholder="Add a new todo..."
        onChange={(e) => setText(e.target.value)}
      />

      <button className="add-btn" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}