import { useLanguage } from "../../context/LanguageContext";
import { SUBJECTS, TRANSLATIONS } from "./data";

type FilterSectionProps = {
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedResult: string;
  setSelectedResult: (result: string) => void;
  resetFilters: () => void;
};

export const FilterSection = ({
  selectedSubject,
  setSelectedSubject,
  selectedResult,
  setSelectedResult,
  resetFilters,
}: FilterSectionProps) => {
  const { language, direction } = useLanguage();

  return (
    <div
      className="flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg mb-8"
      dir={direction}
    >
      <div className="relative w-full sm:w-64">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="w-full appearance-none px-4 py-3 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg outline-none border-2 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 font-medium"
        >
          <option value="">{TRANSLATIONS[language].subject}</option>
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-14 flex items-center px-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="relative w-full sm:w-64">
        <select
          value={selectedResult}
          onChange={(e) => setSelectedResult(e.target.value)}
          className="w-full appearance-none px-4 py-3 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg outline-none border-2 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 font-medium"
        >
          <option value="">{TRANSLATIONS[language].result}</option>
          <option value="ناجح">{TRANSLATIONS[language].pass}</option>
          <option value="راسب">{TRANSLATIONS[language].fail}</option>
        </select>
        <div className="absolute inset-y-0 right-14 flex items-center px-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium text-sm flex items-center justify-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        {TRANSLATIONS[language].resetFilters}
      </button>
    </div>
  );
};
