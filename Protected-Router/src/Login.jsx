import React from 'react'
import { useContext } from 'react'
import { authContext } from './authContext.jsx';
import { useNavigate } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { login, isAuthenticated } = useContext(authContext);
  const navigate = useNavigate(); 

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = () => {

    login();                 
    navigate('/dashboard');  
  };

  return (
    <div>
      <h2>Login</h2>
      <button 
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' 
        onClick={handleLogin}  
      >
        Login
      </button>
    </div>
  )
}

export default Login