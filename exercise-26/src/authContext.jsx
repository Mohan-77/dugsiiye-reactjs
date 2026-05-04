import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [posts, setPosts] = useState([]);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const addPost = (post) => {
        const newPost = {
            id: Date.now(),
            title: post.title,
            content: post.content,
            createdAt: new Date().toLocaleDateString()
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <authContext.Provider value={{ isAuthenticated, login, logout, posts, addPost }}>
            {children}
        </authContext.Provider>
    );
};