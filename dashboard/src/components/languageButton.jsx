import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'; // Adjust the import path based on your project structure

const LanguageButton = () => {
  const languages = ['English', 'France', 'Amharic'];
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);

  return (
    <DropdownMenu className="w-fit h-full flex gap-2 items-center justify-center">
      <DropdownMenuTrigger className="w-10 h-10 flex items-center justify-center rounded-full bg-bgsecondary border border-border focus:outline-none hover:scale-105 transition-transform duration-200 ease-in-out">
        <p className="text-md font-medium">{selectedLanguage.slice(0, 2)}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language}
            className="hover:cursor-pointer"
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageButton;