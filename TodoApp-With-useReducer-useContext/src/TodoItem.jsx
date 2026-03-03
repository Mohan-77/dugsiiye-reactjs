import React from 'react'

export default function TodoItem({ todo }) {
  return (
    <div>
        <span>
            <li>{todo.text}</li>
        </span>
        <button>Delete</button>
    </div>
  )
}
