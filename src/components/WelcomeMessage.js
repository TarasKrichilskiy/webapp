// components/WelcomeMessage.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const WelcomeMessage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 style={{ color: theme === 'dark' ? 'white' : 'black' }}>
        Welcome to the App!
      </h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default WelcomeMessage;