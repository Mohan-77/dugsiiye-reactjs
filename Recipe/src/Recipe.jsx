import React from 'react'
import './index.css'

function Recipe() {
    const [selectedCategory, setSelectedCategory] = React.useState('all');

     const categories = ['all', 'breakfast', 'lunch', 'dinner', 'dessert'];
  const recipes = [
    {
      id: 1,
      title: 'Pancakes',
      category: 'breakfast',
      time: '20 min',
      difficulty: 'easy',
      image: '🥞',
      ingredients: ['flour', 'eggs', 'milk', 'butter']
    },
    {
      id: 2,
      title: 'Pasta Carbonara',
      category: 'dinner',
      time: '30 min',
      difficulty: 'medium',
      image: '🍝',
      ingredients: ['pasta', 'eggs', 'cheese', 'bacon']
    },
    {
      id: 3,
      title: 'Caesar Salad',
      category: 'lunch',
      time: '15 min',
      difficulty: 'easy',
      image: '🥗',
      ingredients: ['lettuce', 'croutons', 'parmesan', 'chicken']
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      category: 'dessert',
      time: '45 min',
      difficulty: 'medium',
      image: '🍰',
      ingredients: ['flour', 'cocoa', 'sugar', 'eggs']
    }
  ];
  return (
    <div  className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4  text-gray-800">Delicious Recipes</h1>
        <p className="text-gray-600 ">Discover amazing recipes for every occasion!</p>
         </div>
       <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors cursor-pointer
                ${selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
   
    </div>
  )
}

export default Recipe