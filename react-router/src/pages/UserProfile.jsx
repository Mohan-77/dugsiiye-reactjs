import React from 'react'
import { useParams } from 'react-router-dom';
import { users } from './UserLists';


function UserProfile() {
  const { userId } = useParams();
  
  const userInfo = users.filter(user => user.id === parseInt(userId))[0];

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p>User ID: {userInfo.id}</p>
        <p>Name: {userInfo.name}</p>
    </div>
  )
}

export default UserProfile