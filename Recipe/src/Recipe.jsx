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
    },
    {
      id: 5,
      title: 'Grilled Salmon',
      category: 'dinner',
      time: '25 min',
      difficulty: 'hard',
      image: '🐟',
      ingredients: ['salmon', 'lemon', 'garlic', 'olive oil']
    },
      {
      id: 6,
      title: 'Avocado Toast',
      category: 'breakfast',
      time: '10 min',
      difficulty: 'easy',
      image: '🥑',
      ingredients: ['bread', 'avocado', 'salt', 'pepper']
    },
     {
      id: 7,
      title: 'Chicken Caesar Wrap',
      category: 'lunch',
      time: '20 min',
      difficulty: 'medium',
      image: '🌯',
      ingredients: ['tortilla', 'chicken', 'lettuce', 'caesar dressing']
    },
      {
        id: 8,
        title: 'Tiramisu',
        category: 'dessert',
        time: '40 min',
        difficulty: 'hard',
        image: '🍮',
        ingredients: ['ladyfingers', 'mascarpone', 'coffee', 'cocoa']
      }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-500 bg-yellow-100';
      case 'hard':
        return 'text-red-500 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
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

        {/* Receipts */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          {
          recipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              {/* recipe Header */}
              <div className='p-6'>
                <div className="flex items-center justify-between ">
                <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
                <span className="text-4xl ">{recipe.image}</span>
                </div>
                
                {/* recipe Details */}
                <div className="mt-4 flex items-center gap-4 text-gray-600">
                  <span className='text-gray-500 text-sm flex items-center'>⏰{recipe.time}</span>
                  
                  <span className={`px-2 py-1 rounded-full text-sm ${getDifficultyColor(recipe.difficulty)}`}>{recipe.difficulty}</span>
                </div>
              </div>
              </div>
              
          ))}
          
   
    </div>
    </div>
  )
}

export default Recipe;