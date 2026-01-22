import Header from "./Header.jsx";
import React from "react";


function App() {
  const user = { name: 'John', age: 30 }

  return (
    <>
      <div>
        <h1>Welcome to the User Dashboard</h1>
        <Header user={user} />
      </div>
    </>
  )
}

export default App
