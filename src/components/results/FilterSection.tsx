interface FilterSectionProps {
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedResult: string;
  setSelectedResult: (result: string) => void;
  uniqueSubjects: string[];
  uniqueDates: string[];
  uniqueResults: string[];
  clearFilters: () => void;
  translations: any;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedSubject,
  setSelectedSubject,
  selectedDate,
  setSelectedDate,
  selectedResult,
  setSelectedResult,
  uniqueSubjects,
  uniqueDates,
  uniqueResults,
  clearFilters,
  translations: t,
}) => {
  return (
    <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <div className="w-full sm:w-1/4">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value="">{t.allSubjects}</option>
            {uniqueSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-1/4">
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value="">{t.allDates}</option>
            {uniqueDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-1/4">
          <select
            value={selectedResult}
            onChange={(e) => setSelectedResult(e.target.value)}
            className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value="">{t.allResults}</option>
            {uniqueResults.map((result) => (
              <option key={result} value={result}>
                {result}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={clearFilters}
          className="w-full sm:w-auto px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
        >
          {t.clearFilters}
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
