import React, { useState, useContext } from 'react';

// Create a context to manage the current theme
const ThemeContext = React.createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Themed button component
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

// Main App component
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
