import { useEffect, useState } from "react"


function App() {
  const[title, setTitle] = useState("Welcome")
  const[name, setName] = useState("")

  useEffect(() => {
    document.title = `${title}, ${name}`;
    
  },[title, name])

  return (
    <>
    <div>

      <h1>Enter Your Name:</h1>
      <input 
      type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
    </div>

      <div>
    <h1>Choose a Greeting:</h1>
      <input 
      type="text" 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      
      
  
     
    </>
  )
}

export default App
