import React from 'react'
import { useContext } from 'react';
import UseContext from './UseContext';

export default function TodoItem({ todo }) {
    const { dispatch } = useContext(UseContext);
  return (
    <div className='group flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200'>
        <div className='flex items-center gap-3 flex-1'>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className='w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2'
            />
            <span 
                className={`text-lg cursor-pointer transition-all duration-200 ${
                    todo.completed 
                        ? 'line-through text-gray-400' 
                        : 'text-gray-800 hover:text-purple-600'
                }`}
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
                {todo.text}
            </span>
        </div>
        <button 
            onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
            className='opacity-0 group-hover:opacity-100 px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-all duration-200 font-medium'
        >
            Delete
        
        </button>
       
    </div>
  )
}
