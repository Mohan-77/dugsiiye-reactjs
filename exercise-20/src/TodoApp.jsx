import React from 'react'
import UseContext from './UseContext'
import { useReducer } from 'react'
import { initialState, reducer } from './reducer'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoApp() {
   const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-white/20">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    ✨ My Todo App
                </h1>
                <p className="text-gray-600">Stay organized and productive</p>
            </div>
            <UseContext.Provider value={{ todos, dispatch }}>
                <TodoForm />
                <TodoList />
            </UseContext.Provider>
        </div>
    </div>
  )
}

export default TodoApp