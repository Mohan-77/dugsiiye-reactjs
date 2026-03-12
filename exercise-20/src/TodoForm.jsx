import React from 'react'
import { useContext } from 'react';
import UseContext from './UseContext';
import { useState } from 'react';

function TodoForm() {
    const{ dispatch } = useContext(UseContext);
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setText("");
    };
  return (
    <div className='mb-6 w-full'>
        <div className='flex gap-3'>
            <input 
                type="text"
                value={text}
                placeholder="What needs to be done?"
                onChange={(e) => setText(e.target.value)}
                className='flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400'
            />
            <button 
                className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                onClick={handleAddTodo}
                disabled={!text.trim()}
            >
                Add
            </button>
        </div>
    </div>
  )
}

export default TodoForm