import { useReducer, useState } from 'react';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
        return [...state, action.payload];
    case 'COMPLETE_TODO':
        return state.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
    case 'DELETE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
    default:
        return state;
  }
}

const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const[text, setText] = useState('');

    const handleClick = () => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                text: text,
                completed: false,
            };
            dispatch({ type: 'ADD_TODO', payload: newTodo });
            setText('');
        }
    }

  return (
    <div>
        <h1>Todo App with Reducer</h1>
        <input type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
        <ul>
            {state.map((todo) => (
                <li key={todo.id}>
                    <span
                    onClick={() => dispatch({ type: 'COMPLETE_TODO', payload: todo.id })}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                    >{todo.text}</span>
                    <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
}   
export default TodoApp;