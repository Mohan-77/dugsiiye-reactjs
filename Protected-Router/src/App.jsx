import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from './authContext.jsx';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const {isAuthenticated, logout} = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement logout logic here
    logout(); // Assuming you have a logout function in your authContext
    navigate('/login'); // Redirect to login page after logout
  };


  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/posts">Posts</Link>
          {
            isAuthenticated && 
            <> 
        <Link to="/dashboard">Dashboard</Link>
        <button        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogout}>
          Logout
        </button>
            </>
            
          }

          

      </nav>
<Outlet />
    </div>
  )
}

export default App