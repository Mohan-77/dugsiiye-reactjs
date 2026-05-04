import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../authContext'



function CreatePosts() {
    const { isAuthenticated, login, addPost } = useContext(authContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    login();
    if (!isAuthenticated) {
        navigate("/login");
    }

    const handleCreatePost = () => {
        if (title.trim() && content.trim()) {
            addPost({ title, content });
            setTitle('');
            setContent('');
            navigate("/");
        } else {
           
        alert("Please fill in both the title and content fields before creating a post.")
        }
    }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4'>
        <div className='max-w-2xl mx-auto'>
            <div className='bg-white rounded-lg shadow-xl p-8 border border-slate-200'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-8'>✍️ Create New Post</h1>
                
                <div className='space-y-6'>
                    <div>
                        <label htmlFor="post-title" className='block text-sm font-semibold text-gray-700 mb-2'>Post Title</label>
                        <input 
                            type="text" 
                            id="post-title"
                            placeholder='Enter an inspiring title...'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='w-full px-4 py-3 border border-slate-300 
                            rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                            focus:border-transparent transition-all duration-200'
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="post-content" className='block text-sm font-semibold text-gray-700 mb-2'>Post Content</label>
                        <textarea 
                            id="post-content"
                            placeholder='Write your amazing content here...'
                            rows='8'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
                        ></textarea>
                    </div>
                    
                    <button 
                        onClick={handleCreatePost}
                        className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95'>
                        🚀 Create Post
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePosts;