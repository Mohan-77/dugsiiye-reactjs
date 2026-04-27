import { useContext } from 'react'
import { authContext } from './authContext.jsx';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element }) => {
const { isAuthenticated } = useContext(authContext);
if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return element;
}

export default  ProtectedRoute