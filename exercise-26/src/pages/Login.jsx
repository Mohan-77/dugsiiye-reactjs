import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../authContext'
import { useNavigate } from 'react-router-dom'


function Login() {
    const {login, isAuthenticated} = useContext(authContext);
    const navigate = useNavigate();
    
    if (isAuthenticated) {
        return <Navigate to="/CreatePosts"  replace/>;
    }
    const handleLogin = () => {
        login();
        navigate("/CreatePosts");
    }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4'>
        <div className='w-full max-w-md'>
            <div className='bg-white rounded-lg shadow-xl p-8 border border-slate-200'>
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2'>Welcome</h1>
                    <p className='text-gray-600'>Sign in to your account</p>
                </div>
                <button 
                    className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95' 
                    onClick={handleLogin}
                >
                    🔐 Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login