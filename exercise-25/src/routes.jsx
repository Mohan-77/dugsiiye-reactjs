import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import RecipeList from './pages/RecipeList'
import RecipeDetails from './pages/RecipeDetails'
import Categories from './pages/Categories'
import CategoryRecipes from './pages/CategoryRecipes'
import NatFounded from './components/NotFounded'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NatFounded />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
        path: 'recipes',
        element: <RecipeList />,
      },
      {
        path: 'recipes/:id',
        element: <RecipeDetails />,
      },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          {
            path: ':categoryId',
            element: <CategoryRecipes />,
          },
        ],
      },
      
        ]
    }
])
      
        

