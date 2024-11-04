import React from 'react'
import { langColor } from './LanguageRepoList';

export const TemplatePills = ({ languages }: { languages: string[] }) => {
    return (
      <div className="flex flex-wrap gap-2 py-2">
        {languages.map((lang, index) => {
          const color = langColor[lang] || 'bg-gray-400';
           return (
            <button key={index} disabled className={`${color} lang-pills`}>
              <p>{lang}</p>
            </button>
           )
      })}
      </div>
    );
};
