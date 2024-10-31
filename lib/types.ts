export type TThemeContext = {
    currentTheme: 'light' | 'dark'
    changeCurrentTheme?: (newTheme: 'light' | 'dark') => void;
  }