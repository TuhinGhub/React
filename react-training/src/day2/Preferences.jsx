import { useState } from 'react';

// Custom hook useLocalStorage
const useLocalStorage = (key, initialValue) => {
  // Retrieve stored value from localStorage or use initialValue
  const storedValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;

  // State to store the current value
  const [value, setValue] = useState(storedValue);

  // Function to set value to localStorage and update state
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Function to remove value from localStorage and update state
  const removeStoredValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return { value, setStoredValue, removeStoredValue };
};

// Component using useLocalStorage hook
const PreferencesManager = () => {
  // Using useLocalStorage hook to manage user preferences
  const { value: preferences, setStoredValue, removeStoredValue } = useLocalStorage('preferences', {});

  // Example function to update preferences
  const updatePreference = (key, newValue) => {
    setStoredValue({ ...preferences, [key]: newValue });
  };

  // Example function to reset preferences
  const resetPreferences = () => {
    removeStoredValue();
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <p>Stored Preferences: {JSON.stringify(preferences)}</p>
      <button onClick={() => updatePreference('theme', 'dark')}>Set Dark Theme</button>
      <button onClick={() => resetPreferences()}>Reset Preferences</button>
    </div>
  );
};

export default PreferencesManager;
