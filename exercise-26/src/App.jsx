import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authContext } from "./authContext";

function App() {
  const { isAuthenticated, logout } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                My App
              </h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back</p>
            </div>

            <nav className="flex items-center gap-1 sm:gap-3">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50"
              >
                🏠 Home
              </Link>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/CreatePosts"
                    className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 rounded-lg hover:bg-emerald-50"
                  >
                    ✍️ Create Posts
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
