import React from 'react'

export const TemplatePills = ({ languages }: { languages: string[] }) => {
    return (
      <div className="flex flex-wrap gap-2 py-2">
        {languages.map((lang, index) => (
          <button key={index} disabled className={`bg-blue-400 font-qs px-4 py-0.5 rounded-full font-bold`}>
            <p>{lang}</p>
          </button>
        ))}
      </div>
    );
  };
