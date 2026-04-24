import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const categories = [
    {
        id: 'Desserts',
        name: 'Desserts',
        description: 'Sweet treats to satisfy your cravings.',
    },
    {
        id: 'Dinner',
        name: 'Dinner',
        description: 'Hearty and delicious meals for your evening.',
    },
    {
        id: 'Lunch',
        name: 'Lunch',
        description: 'Quick and tasty recipes for your midday meal.',
    },
    {
        id: 'Breakfast',
        name: 'Breakfast',
        description: 'Start your day with these delicious breakfast ideas.',
    },
];

export default function Categories() {
  return (
    <div className="grid md:grid-cols-[300px 1fr] gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-6">Recipe Categories</h2>
        <div className="space-y-2">
            {categories.map(category => (
                <Link 
                key={category.id} 
                    to={`/categories/${category.id}`}
                    className="block p-3 rounded hover:bg-rose-50 hover:text-rose-600">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                </Link>
            ))}
        </div>
    </div>
    <div>
        <Outlet />
    </div>
    </div>
  )
}
