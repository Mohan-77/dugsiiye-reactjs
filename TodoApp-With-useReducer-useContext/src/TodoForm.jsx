import React from 'react';
import { useState, useContext } from 'react';
import TodoContext from './TodoContext';
const TodoForm = () => {
    const { dispatch } = useContext(TodoContext);
    const [Text, setText] = useState('');

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: Text,
            completed: false
        };
        dispatch({ type: 'ADD_TODO', payload: newTodo });
        setText('');

    }
   
  return (
    <div>
        <input type="text" 
        value={Text}
        placeholder="Add a new todo"
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>

    )
}

export default TodoForm
