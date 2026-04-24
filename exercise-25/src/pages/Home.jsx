import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='text-center'>
            <div>
                <h1 className='text-4xl font-bold mb-6'>welcome to recipe book</h1>
                <p className='text-2xl text-gray-500 mb-5'> Discover delicious recipes and start cooking today!
                </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6 max-w-2xl mx-auto '>
                <Link to="/recipes" className='bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600'>
                   <h2>Browse Recipes</h2>
                     <p>Explore our collection of delicious recipes</p>
                </Link>

                  <Link 
          to="/categories" 
          className="bg-rose-600 text-white p-6 rounded-lg shadow-md hover:bg-rose-700 transition-colors"
        >
          <h2 className="text-2xl font-bold mb-2">Recipe Categories</h2>
          <p>Find recipes by category</p>
        </Link>
            </div>
        </div>
    )
}

export default Home