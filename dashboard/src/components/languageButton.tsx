import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"; // Adjust the import path based on your project structure

// Define the type for the languages array
type Language = string;

const LanguageButton: React.FC = () => {
  const languages: Language[] = ["English", "France", "Amharic"];
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(languages[0]);

  return (
    <DropdownMenu className="w-fit h-full flex gap-2 items-center justify-center">
      <DropdownMenuTrigger className="w-10 h-10 flex items-center justify-center rounded-full bg-bgsecondary border border-border focus:outline-none hover:scale-105 transition-transform duration-200 ease-in-out">
        <p className="text-md font-medium">{selectedLanguage.slice(0, 2)}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 p-2 bg-white rounded-lg shadow-lg border border-border">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language}
            className="hover:cursor-pointer hover:bg-bgsecondary active:bg-bgsecondary active:text-white"
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