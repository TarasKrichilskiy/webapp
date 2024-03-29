// components/ThemeContext.js
import React, { createContext, useState } from 'react';

// Create a context with a default value
const ThemeContext = createContext({
  theme: 'light', // default theme
  toggleTheme: () => {} // placeholder function
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;