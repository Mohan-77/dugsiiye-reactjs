import React, { useState, useContext } from "react";
import { authContext } from "../authContext";
import { useNavigate } from "react-router-dom";

const postsData = [
  {
    id: 1,
    title: "introduction to React",
    content: "React is a powerful JavaScript library for building user interfaces...",
    createdAt: "2023-01-01"
  },
    {
    id: 2,
    title: "Getting Started with React Router",
    content: "React Router is a popular library for handling routing in React applications...",
    createdAt: "2023-01-05"
    },
    {
    id: 3,
    title: "State Management with React Context",
    content: "The React Context API provides a way to manage state globally across your application...",
    createdAt: "2023-01-10"
    },
    
];

function Home() {
  const { posts } = useContext(authContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Combine default posts with user-created posts
  const allPosts = [...postsData, ...posts];

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase()),
  );

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            📚 All Posts
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing posts from the community
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search posts by title or content..."
            className="w-full px-6 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
          />
        </div>

        {/* Posts Grid */}
        <div>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 hover:border-blue-300 cursor-pointer hover:scale-105 transform"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-800 flex-1">
                      {post.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-xs text-gray-500">
                      📅 {post.createdAt}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-500 mb-4">😔 No posts found</p>
              <p className="text-gray-400">
                Try adjusting your search terms or create a new post
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-bold text-blue-600">
                {filteredPosts.length}
              </span>{" "}
              of <span className="font-bold text-blue-600">{allPosts.length}</span>{" "}
              posts
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
