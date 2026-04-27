import React,{use, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const posts = [
 {
    id: 1,
    title: 'React Basics',
    content: 'Learn the basics of React, including components, state, and props.'
  },
  {
    id: 2,
    title: 'React Router',
    content: 'Learn how to use React Router for client-side routing in your React applications.'
 },
 {
    id: 3,
    title: 'Protected Routes',
    content: 'Learn how to create protected routes in React using React Router and authentication context.'
 },
 {
    id: 4,
    title: 'React Context API',
    content: 'Learn how to use the React Context API for state management in your React applications.'
 },
 {
    id: 5,
    title: 'React Hooks',
    content: 'Learn about React Hooks, including useState, useEffect, and custom hooks.'
 },
 {
    id: 6,
    title: 'JavaScript ES6 Features',
    content: 'Learn techniques for optimizing the performance of your React applications.'
 },
 {
    id: 7,
    title: 'Performance Optimization',
    content: 'Learn techniques for optimizing the performance of your React applications.'
 }

];

const useQuery = () => {
   return new URLSearchParams(location.search);
}

const PostsList = () => {
   const query = useQuery();

   const searchQuery = query.get('q') || '';

   const [search, setSearch] = useState('searchQuery');

   const navigate = useNavigate();

   useEffect(() => {
    if(search) {
        navigate(`/posts?q=${search}`);
    }
   }, [search, navigate]);

   const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
   );
    
  return (
    <div className='max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md mt-10'>
        <h2 className='text-2xl font-bold mb-4'>Search Posts</h2>
        <input type="text" placeholder="Search posts..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
            className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-6'
        />
        <div>
            {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                    <div key={post.id} className='mb-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
                        <h3 className='text-xl font-bold mb-2'>{post.title}</h3>
                        <p className='text-gray-700'>{post.content}</p>
                    </div>
                ))
            ) : (
                <p className='text-gray-500'>No posts found.</p>
            )}

        </div>

    </div>
  )
}

export default PostsList;