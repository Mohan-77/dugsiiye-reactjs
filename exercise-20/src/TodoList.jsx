import React from 'react'
import { useContext } from 'react';
import UseContext from './UseContext';
import TodoItem from './TodoItem';

function TodoList() {
    const{ todos } = useContext(UseContext);
  return (
    <div className='w-full'>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>Todo List</h2>
        {todos.length === 0 ? (
            <p className='text-center text-gray-500 italic py-4'>
                🎉 No tasks here. Add something to get started!
            </p>
        ) : (
            <ul className='space-y-2'>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
            </ul>
        )}
    </div>
  )
}

export default TodoList