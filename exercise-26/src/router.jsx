import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import CreatePosts from './pages/CreatePosts'
import Login from './pages/Login'
import PostDetail from './pages/PostDetail'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "post/:id",
        element: <PostDetail />
      },
      {
        path: "CreatePosts",
        element: (
          <ProtectedRoute element={<CreatePosts />} />
        )
      },
      
     
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);