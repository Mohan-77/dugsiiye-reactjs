import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {  authContext } from './authContext'


function ProtectedRoute({ element}) {
    const { isAuthenticated } = useContext(authContext);
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return element;
}

export default ProtectedRoute