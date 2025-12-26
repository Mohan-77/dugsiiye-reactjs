import {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [fruits, setFruits] = useState(null);
  return (
  <div>
    
      {
        items.length > 0 ? (
     
        <ul>
          {
          items.map((item, index) => (
            <li key={index}>{item}</li>
        )) }
        </ul>
        ) :
        <p>No items found </p>
      }
        
     
    

    </div>

  );
}

export default App
