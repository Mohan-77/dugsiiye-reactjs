
import { useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")

//  const toggle = () => {
//   setIsVisible(!isVisible)
//  }

const handleChange = (e) => {
  setName(e.target.value)
}

return (
  <>
  {/* <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}Message</button>
  {isVisible && <p>This is toggle message</p> } */}


  <input type="text" value={name} onChange={handleChange}/>
  <p>Hello, {name}</p>
  </>
  
)
}
export default App
