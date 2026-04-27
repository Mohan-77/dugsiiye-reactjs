import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import PostsList from "./PostsList";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: 'dashboard',
                element: (
                <ProtectedRoute element={<Dashboard />} />
                )
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'posts',
        element: <PostsList />
    }
        ]
    },

]


);

export default routes;