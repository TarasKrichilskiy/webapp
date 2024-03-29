import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import MyButton from './components/MyButton';
import NameGraph from './components/NameGraph'; // Adjust the import path as needed
import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  
  const [names, setNames] = useState(['Alice', 'Bob', 'Charlie']);
  const [count, setCount] = useState(0); // Use useState for count

  const handleButtonClick = () => {
    alert("This is Taras's app")
  };
  const handleButtonClick2 = () => {
    alert("this is the second button")
  };

  
  const updateNames = () => {
    if (count === 0) {
      setNames(['Taras', 'Roman', 'Vitaliy', 'Gym']);
      setCount(1); // Update count state
    } else if (count === 1) {
      setNames(['taras', 'liya', 'roman']);
      setCount(0); // Reset count state
    }
  };
  return (
    <div className="App">
      < WelcomeMessage />
      <MyButton label="Click Me" onClick={handleButtonClick} />
      <NameGraph names={names} />,
      <button onClick={updateNames}>Update Names</button>
      <MyButton label="Click Me" onClick={handleButtonClick2} />
      {/* You can add other components or HTML/JSX here */}
      <Contacts />
  
    </div>

    
  );
}

export default App;