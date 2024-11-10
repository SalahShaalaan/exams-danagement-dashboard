import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "./data";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const { language, direction } = useLanguage();

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={TRANSLATIONS[language].searchPlaceholder}
        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl shadow-md outline-none transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
        dir={direction}
      />
    </div>
  );
};
