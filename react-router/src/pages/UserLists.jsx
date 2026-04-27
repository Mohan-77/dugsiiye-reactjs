import React from 'react'
import { Link } from 'react-router-dom';

export  const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];

function UserLists() {
   
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <ul className="list-disc pl-5 space-y-2">
            {users.map(user => (
                <li key={user.id} 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                   <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">
                    {user.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserLists