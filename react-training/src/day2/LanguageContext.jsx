import React, { useState, useContext } from 'react';

const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'spanish' : 'english');
  };

  return (
    <button onClick={toggleLanguage}>
      {language === 'english' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
    </button>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>
          <Content />
        </h1>
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

// Content component
const Content = () => {
  const { language } = useContext(LanguageContext);

  return language === 'english' ? (
    <p>Hello, welcome to the language switcher application!</p>
  ) : (
    <p>Hola, bienvenido a la aplicación de cambio de idioma!</p>
  );
};

export default App;
