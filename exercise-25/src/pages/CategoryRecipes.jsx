import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const allRecipes = [
    {
        id: 1,
        title: 'Chocolate Cake',
        category: 'Desserts',
        description: 'A rich and moist chocolate cake perfect for any occasion.',
    },
    {
        id: 2,
        title: 'Spaghetti Carbonara',
        category: 'Dinner',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    {
        id: 3,
        title: 'Greek Salad',
        category: 'Lunch',
        description: 'A refreshing salad with tomatoes, cucumbers, olives, feta cheese, and a lemon-oregano dressing.',
    },
    {
        id: 4,
        title: 'Pancakes',
        category: 'Breakfast',
        description: 'Fluffy pancakes served with syrup and fresh fruit.',
    },
];

 function CategoryRecipes() {
    const { categoryId } = useParams(); // This would typically come from route params or state
    const recipes = allRecipes.filter(recipe => recipe.category === categoryId);
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-6 capitalize">{categoryId} Recipes</h2>
      
      {recipes.length > 0 ? (
        <div className="grid gap-6">
          {recipes.map(recipe => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="block p-4 border rounded-lg hover:border-rose-500 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No recipes found in this category.</p>
      )}
    </div>
  );
};

export default CategoryRecipes;

