import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import WelcomeMessage from './components/WelcomeMessage';
import MyButton from './components/MyButton';
import NameGraph from './components/NameGraph'; // Adjust the import path as needed
import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import UserForm from './components/UserForm'; // Import UserForm component
//import form from './Form';

function App() {
  //this is the main entry point
  //this is the main entry point fix
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
    <ThemeProvider> {/* Wrap the app in the ThemeProvider */}
    <div className="App">
      < WelcomeMessage />
      <MyButton label="Click Me" onClick={handleButtonClick} />
      <NameGraph names={names} />,
      <button onClick={updateNames}>Update Names</button>
      <MyButton label="Click Me" onClick={handleButtonClick2} />
      {/* You can add other components or HTML/JSX here */}
      <Contacts />
      <UserForm /> {/* Add the UserForm component */}
  
  
    </div>
    </ThemeProvider>
    
  );
}

export default App;