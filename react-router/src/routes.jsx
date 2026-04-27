// routes.js
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './components/NotFounded';
import UserLists from './pages/UserLists';
import UserProfile from './pages/UserProfile';
import ProductsDetails from './pages/ProductsDetails';
import DashboardLayout from './components/DashboardLayout';
import Settings from './components/Settings';
import Overview from './components/Overview';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'users',
        element: <UserLists />,
      }, 
      {
        path: 'users/:userId',
        element: <UserProfile />,
      },
      {
        path: 'products/:categoryId/:productId',
        element: <ProductsDetails />,

      },
      
      {
        path: 'products/:categoryId/product/:productId',
        element: <ProductsDetails />,
      },
      {
        path: 'Dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: 'settings',
            element: <Settings />,
          }
        ]
      }



    ],
  },
]);

export default router;
