import { createContext, useState, useContext } from 'react';
import { ITheme } from '../interfaces';
import { IThemeType } from '../interfaces';

const ThemeContext = createContext<IThemeType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ITheme>('light');

  const toggleTheme = (selectedTheme: ITheme) => {
    setTheme(selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
