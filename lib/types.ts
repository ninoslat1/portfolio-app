export type TThemeContext = {
    currentTheme: 'light' | 'dark'
    changeCurrentTheme?: (newTheme: 'light' | 'dark') => void;
  }

  export type TProj = {
    id: number;
    name: string;
    description: string;
    languages_url: string; // URL untuk mendapatkan bahasa
  };
  
  export type TLanguages = {
    [key: string]: number; 
  };
  
  // Menyimpan data gabungan
  export type TGithubProj = {
    repo: TProj;
    languages: TLanguages;
  };