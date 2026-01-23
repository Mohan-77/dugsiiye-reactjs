import { useState } from 'react'
import Language from './Language.jsx'
import userContext from './userContext.js';

import './App.css'

function App() {
  const [lan, setCount] = useState('english')

  const handleLang = () => {
    setCount(lan === 'english' ? 'korean' : 'english')
  }
  return (
    <>
    <userContext.Provider value={lan}>
      <Language />
      <button onClick={handleLang}>
      Switch to {lan === 'english' ? 'korean' : 'english'}
      </button>
    </userContext.Provider>
    </>
  )
}

export default App
