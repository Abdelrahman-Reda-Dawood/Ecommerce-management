import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider({children}) {
  const [darkMode, setDarkMode] = useState('dark');

  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
}
