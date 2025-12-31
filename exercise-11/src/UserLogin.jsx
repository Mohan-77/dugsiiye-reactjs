import React, { useState } from 'react';

 const UserLogin = () => {
 const[username, setUsername] = useState('');
 const[password, setPassword] = useState('');
 const[isLoggedIn, setIsLoggedIn] = useState(false);

 const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    if (username && password) {
        setIsLoggedIn(true);
    }
};

const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
};
if (isLoggedIn) {
    return (
        <div>   
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}


    return (
        <form action="">
                <h2>User Login</h2>
            <div>
                <label >Username:</label>
                <input type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required />
                <label >Password:</label>
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required />
            </div>
            <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        
    );
}
export default UserLogin;