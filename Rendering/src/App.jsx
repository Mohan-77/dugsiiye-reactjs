import {useState} from 'react';
import Notifications from './Notifications.jsx';

function App() {
  // const [items, setItems] = useState([]);
  // const [fruits, setFruits] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState(['Message 1', 'Message 2']);
  return (
  <div>
    
      {/* {
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
        
      */}
    
      < Notifications unreadMessages={unreadMessages} />
    </div>

  );
}

export default App
