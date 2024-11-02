export type TThemeContext = {
    currentTheme: 'light' | 'dark'
    changeCurrentTheme?: (newTheme: 'light' | 'dark') => void;
  }

export type TGithubProj = {
  id: number,
  name: string
  description: string
  languages_url: string
}

export type TLanguages = {
  [key: string]: number;
};