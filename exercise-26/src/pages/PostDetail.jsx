import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { authContext } from '../authContext'

const postsData = [
  {
    id: 1,
    title: "introduction to React",
    content: "React is a powerful JavaScript library for building user interfaces with reusable components. It uses a virtual DOM for efficient updates and follows a component-based architecture. React makes it easy to create interactive UIs where your data changes view automatically. You can learn more about React by visiting the official documentation.",
    createdAt: "2023-01-01"
  },
  {
    id: 2,
    title: "Getting Started with React Router",
    content: "React Router is a popular library for handling routing in React applications. It provides components like BrowserRouter, Route, Link, and useNavigate for navigating between pages. With React Router, you can create single-page applications with multiple views. It supports nested routes, lazy code loading, dynamic route matching, and location transition handling.",
    createdAt: "2023-01-05"
  },
  {
    id: 3,
    title: "State Management with React Context",
    content: "The React Context API provides a way to manage state globally across your application without prop drilling. Context consists of three main parts: createContext(), Provider, and useContext hook. It's perfect for managing theme, authentication, and other application-wide state. Context can be combined with useReducer for more complex state management scenarios.",
    createdAt: "2023-01-10"
  },
]

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = useContext(authContext);
  
  // Combine default posts with user-created posts
  const allPosts = [...postsData, ...posts];
  const post = allPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4'>
        <div className='max-w-3xl mx-auto text-center py-16'>
          <p className='text-2xl text-gray-500 mb-4'>😔 Post not found</p>
          <button 
            onClick={() => navigate('/')}
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all'
          >
            ← Back to Posts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4'>
      <div className='max-w-3xl mx-auto'>
        <button 
          onClick={() => navigate('/')}
          className='mb-8 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors'
        >
          ← Back to Posts
        </button>

        <div className='bg-white rounded-lg shadow-xl p-8 border border-slate-200'>
          <div className='mb-6'>
            <span className='inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4'>
              📅 {post.createdAt}
            </span>
            <h1 className='text-5xl font-bold text-gray-800 mb-4'>
              {post.title}
            </h1>
          </div>

          <div className='border-t-2 border-slate-200 pt-8'>
            <p className='text-lg text-gray-700 leading-relaxed whitespace-pre-wrap'>
              {post.content}
            </p>
          </div>

          <div className='mt-12 pt-8 border-t border-slate-200 flex items-center gap-4'>
            <div className='flex-1'>
              <p className='text-sm text-gray-500'>Share this post</p>
            </div>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
