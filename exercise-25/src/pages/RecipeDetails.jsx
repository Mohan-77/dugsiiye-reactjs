import React from 'react'
import { Link } from 'react-router-dom';

const recipe = {
  id: 1,
    title: 'sample recipe',
        ingredients: [
        '1 cup of flour',
        '2 eggs',
        '1/2 cup of sugar',
        '1/4 cup of butter',
    ],
    instructions: [
        'Preheat the oven to 350°F (175°C).',
        'In a bowl, mix the flour and sugar.',
        'Add the eggs and melted butter, and stir until smooth.',
        'Pour the batter into a greased baking pan.',
        'Bake for 30 minutes or until a toothpick comes out clean.',
    ],
   
    
};

const RecipeDetails = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <Link to="/recipes"
                className="text-rose-500 hover:underline mb-4 inline-block"
            >
                &larr; Back to Recipes
            </Link>
            <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2 >
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
                    <ul className="list-disc list-inside mb-6">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-gray-700">{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
                    <ol className="list-decimal list-inside">
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index} className="text-gray-700 mb-2">{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
               
       </div>
    )

}
export default RecipeDetails;