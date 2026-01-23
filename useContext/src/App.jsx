import Header from "./Header.jsx";
import React from "react";
import userContext from "./UserContext.js";
import { useState } from "react";
import ThemedContext from "./ThemedContext.jsx";
import ThemeContext from "./ThemeContext.js";


function App() {
  // const [user, setUser] = useState({ name: 'John', age: 30 });
  const [theme, setTheme] = useState('light');
  const toggleThem = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    <>
      {/* <userContext.Provider value={user} >
        <h1>Welcome to the User Dashboard</h1>
        <Header  />
      </userContext.Provider> */}
      <ThemeContext.Provider value={ theme}>
     
       <button 
       onClick={toggleThem}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
       </button>
      <ThemedContext />
      
      </ThemeContext.Provider>
    </>
  )
}

export default App
